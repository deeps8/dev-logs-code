import { useFormContext } from "react-hook-form";
import { FormConfig } from "../util/form-config";

function PersonalInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormConfig>();
  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First name
          </label>
          <input
            {...register("personalInfo.firstName", { required: { value: true, message: "Required" } })}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
          />
          {errors.personalInfo?.firstName && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.personalInfo.firstName.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last name
          </label>
          <input
            {...register("personalInfo.lastName", { required: { value: true, message: "Required" } })}
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
          />
          {errors.personalInfo?.lastName && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.personalInfo.lastName.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email address
          </label>
          <input
            {...register("personalInfo.email", { required: { value: true, message: "Required" } })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
          />
          {errors.personalInfo?.email && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.personalInfo.email.message}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoForm;
