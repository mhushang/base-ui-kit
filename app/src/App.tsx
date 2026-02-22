import {
  Button,
  Checkbox,
  Input,
  FormField,
  Container,
  Card,
} from "@base-ui-kit/ui";

const App = () => {
  return (
    <Container maxWidth="md">
      <Card padding="md">
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
      </Card>
    </Container>
  );
};

export default App;
