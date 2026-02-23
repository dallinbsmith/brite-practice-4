# Practice 4: Benefits Enrollment Form

## Scenario
You're building an enrollment form where employees enter their information to sign up for benefits. The form fields are defined in a configuration object.

## Your Task
Complete the `EnrollmentForm` component to:

1. **Render form fields** - Create inputs based on the field configuration
2. **Handle input changes** - Implement controlled inputs with state
3. **Validate on submit** - Check required fields and show errors
4. **Display submission state** - Show success message after valid submission

## Data Structure
```typescript
type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "date";
  required: boolean;
  options?: string[]; // Only for select type
};

type FormConfig = {
  title: string;
  fields: FormField[];
};
```

## Acceptance Criteria
- [ ] All fields from config render with correct input types
- [ ] Select fields show all options from the config
- [ ] Form state updates as user types
- [ ] Required field validation on submit
- [ ] Error messages display for invalid fields
- [ ] Success message shows after valid submission

## Time Estimate
~45 minutes
