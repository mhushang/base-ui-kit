import { Button, Checkbox, Input, FormField } from "@base-ui-kit/ui";

const App = () => {
  return (
    <div>
      <FormField label="Name" required>
        <Input />
      </FormField>
      <FormField label="Email" required>
        <Input />
      </FormField>
      <FormField label="Password" required>
        <Input />
      </FormField>
      <FormField label="Confirm Password" required>
        <Checkbox label="I agree to the terms and conditions" />
      </FormField>
      <Button>Submit</Button>
    </div>
  );
};

export default App;
