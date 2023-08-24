import { Button } from '#ui/button';
import { Input } from '#ui/input/input';
import { useState } from 'react';

export const TestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <Input
        type="text"
        labelText="User name"
        value={name}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Button variant="primary" onClick={() => console.log({ name, email })}>
        Show me state
      </Button>
    </form>
  );
};
