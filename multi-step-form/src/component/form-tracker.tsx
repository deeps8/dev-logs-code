import { FormSteps } from "./base-form";

type FormTrackerProps = {
  activeStep: number;
};
function FormTracker({ activeStep }: FormTrackerProps) {
  return (
    <div>
      <div className="">
        <ul className="step-indicators flex">
          {FormSteps.map((s, i) => {
            const active = activeStep === i;
            return (
              <li key={s.name} className="flex-1 text-center space-y-2">
                <div className="flex justify-center step-btn">
                  <button
                    // onClick={() => setActiveStep(i)}
                    className={`aspect-square w-14 text-lg grid place-content-center border rounded-full ${
                      active && "bg-white text-slate-900 font-semibold"
                    }`}
                  >
                    {i + 1}
                  </button>
                </div>
                <p>{s.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FormTracker;
