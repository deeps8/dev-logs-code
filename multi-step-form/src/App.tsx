import "./App.css";
import BaseForm from "./component/base-form";

function App() {
  return (
    <>
      <div className="text-center p-5">
        <h1 className="text-4xl font-semibold">Multi-Step Form</h1>
      </div>
      <div className="m-4">
        <div className="p-4">
          <BaseForm />
        </div>
      </div>
    </>
  );
}

export default App;
