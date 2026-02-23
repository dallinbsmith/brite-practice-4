export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "date";
  required: boolean;
  options?: string[];
  errors?: Record<string, string> | undefined;
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
      errors: {
        firstName: "First Name is required",
      },
    },  
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      errors: {
        lastName: "Last Name is required",
      },
    },
    {
      name: "email",
      label: "Work Email",
      type: "email",
      required: true,
      errors: {
        email: "Work Email is required",
      },
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
      required: true,
      errors: {
        dateOfBirth: "Date of Birth is required",
      },
    },
    {
      name: "employmentType",
      label: "Employment Type",
      type: "select",
      required: true,
      options: ["Full-Time", "Part-Time", "Contractor"],
      errors: {
        employmentType: "Employment Type is required",
      },
    },
    {
      name: "department",
      label: "Department",
      type: "select",
      required: true,
      options: ["Engineering", "Marketing", "Sales", "Human Resources", "Finance", "Operations"],
      errors: {
        department: "Department is required",
      },
    },
    {
      name: "startDate",
      label: "Benefits Start Date",
      type: "date",
      required: false,
      errors: {
        startDate: "Benefits Start Date is required",
      },
    },
  ],
};
