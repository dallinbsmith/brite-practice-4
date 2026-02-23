export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "date";
  required: boolean;
  options?: string[];
};

export type FormConfig = {
  title: string;
  fields: FormField[];
};

export const enrollmentFormConfig: FormConfig = {
  title: "Employee Benefits Enrollment",
  fields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Work Email",
      type: "email",
      required: true,
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
      required: true,
    },
    {
      name: "employmentType",
      label: "Employment Type",
      type: "select",
      required: true,
      options: ["Full-Time", "Part-Time", "Contractor"],
    },
    {
      name: "department",
      label: "Department",
      type: "select",
      required: true,
      options: ["Engineering", "Marketing", "Sales", "Human Resources", "Finance", "Operations"],
    },
    {
      name: "startDate",
      label: "Benefits Start Date",
      type: "date",
      required: false,
    },
  ],
};
