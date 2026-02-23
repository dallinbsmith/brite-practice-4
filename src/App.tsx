import { EnrollmentForm } from "./components/EnrollmentForm";
import { enrollmentFormConfig } from "./data";

export const App = () => {
  return (
    <div className="app">
      <h1>New Employee Onboarding</h1>
      <EnrollmentForm config={enrollmentFormConfig} />
    </div>
  );
};
