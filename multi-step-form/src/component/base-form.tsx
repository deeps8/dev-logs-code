import { FormProvider, useForm } from "react-hook-form";
import FormTracker from "./form-tracker";
import { FormConfig, FormDefaultValue } from "../util/form-config";
import { useEffect, useState } from "react";
import PersonalInfoForm from "./personal-form";
import EducationForm from "./education-form";
import AddressForm from "./address-form";

const saveData = (data: FormConfig, step: number) => {
  // if (data present in local-storage) then update the data
  // if (data not present in local-storage) then add the data
  // lastly push state with updated id if needed

  const url = new URL(window.location.href);
  const resumeId = url.searchParams.get("resumeId") || "";
  const formData = localStorage.getItem(resumeId);

  if (formData === null && resumeId === "") {
    // first time form filled, add data to localstorage then update the url
    const newId = Date.now().toString();
    localStorage.setItem(newId, JSON.stringify({ data, step }));
    url.searchParams.set("resumeId", newId);
    window.history.pushState({}, "", url.search);
  } else {
    // update the localstorage
    localStorage.setItem(resumeId, JSON.stringify({ data, step }));
  }

  return url.search;
};

export const FormSteps = [
  {
    name: "Personal Info",
    key: "personalInfo",
    component: <PersonalInfoForm />,
  },
  {
    name: "Education",
    key: "education",
    component: <EducationForm />,
  },
  {
    name: "Address",
    key: "address",
    component: <AddressForm />,
  },
] as const;

function BaseForm() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const formMethods = useForm<FormConfig>({
    defaultValues: FormDefaultValue,
    mode: "onChange",
    shouldFocusError: true,
  });

  const handleNext = async () => {
    // first validate the data then move to next form
    const valid = await formMethods.trigger(FormSteps[activeStep].key, { shouldFocus: true });
    if (valid) {
      saveData(formMethods.getValues(), activeStep);
      setActiveStep((prev) => {
        if (prev + 1 < FormSteps.length) return prev + 1;
        return prev;
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => {
      if (prev - 1 >= 0) return prev - 1;
      return prev;
    });
  };

  const submit = (data: FormConfig) => {
    console.log({ data });
    saveData(data, activeStep);
    setActiveStep(3);
  };

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      const formData = localStorage.getItem(url.searchParams.get("resumeId") || "");
      if (formData !== null) {
        const { data, step } = JSON.parse(formData);
        formMethods.reset(data);
        setActiveStep(step + 1);
      }
    }
  }, [formMethods]);

  return (
    <FormProvider {...formMethods}>
      <div className="space-y-8">
        {activeStep !== 3 && (
          <>
            <FormTracker activeStep={activeStep} />
            <div className="p-5">
              <form noValidate onSubmit={formMethods.handleSubmit(submit)}>
                {FormSteps[activeStep].component}
                <div className="mt-5 flex space-x-5">
                  {/* {activeStep === FormSteps.length - 1 ? (
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  ) : ( */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Next
                  </button>
                  {/* )} */}
                  {activeStep !== 0 && (
                    <button
                      onClick={handleBack}
                      type="button"
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Back
                    </button>
                  )}
                </div>
              </form>
            </div>
          </>
        )}
        {activeStep === 3 && (
          <div>
            <div>
              <h1 className="text-center text-2xl bg-blue-500 rounded-sm p-2 my-3">Thank You</h1>
              <pre>{JSON.stringify(formMethods.getValues(), null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </FormProvider>
  );
}

export default BaseForm;
