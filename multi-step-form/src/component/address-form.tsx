import { useFormContext } from "react-hook-form";
import { FormConfig } from "../util/form-config";

function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormConfig>();
  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Location
          </label>
          <input
            {...register("address.location", { required: { value: true, message: "Required" } })}
            type="text"
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Delhi, India"
          />
          {errors.address?.location && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.address.location.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pincode
          </label>
          <input
            {...register("address.pincode", { required: { value: true, message: "Required" } })}
            type="text"
            id="pincode"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="110093"
          />
          {errors.address?.pincode && (
            <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.address.pincode.message}</span>
          )}
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              {...register("address.policy", { required: { value: true, message: "Required" } })}
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
            .
          </label>
        </div>
        {errors.address?.policy && (
          <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.address.policy.message}</span>
        )}
      </div>
    </div>
  );
}

export default AddressForm;
