import { useFormContext } from "react-hook-form";
import { FormConfig } from "../util/form-config";

function EducationForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormConfig>();

  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="geoRegion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            {...register("education.geoRegion", { required: { value: true, message: "Required" } })}
            id="geoRegion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose a region</option>
            <option value="af">Africa</option>
            <option value="apac">Asia</option>
            <option value="eu">Europe</option>
            <option value="na">North America</option>
            <option value="sa">South America</option>
          </select>
          {errors.education?.geoRegion && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.education?.geoRegion.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="uniname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            University Name
          </label>
          <input
            {...register("education.universityName", { required: { value: true, message: "Required" } })}
            type="text"
            id="uniname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg Delhi University"
          />
          {errors.education?.universityName && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.education?.universityName.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="stream" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Stream
          </label>
          <input
            {...register("education.stream")}
            type="text"
            id="stream"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg MCA, MBA, BTech"
          />
        </div>
      </div>
    </div>
  );
}

export default EducationForm;
