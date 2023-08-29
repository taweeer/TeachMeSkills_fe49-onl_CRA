import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';

export const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  return (
    <form>
      <Input
        type="text"
        labelText="Name"
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
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          setConfirmedPassword(currentTarget.value)
        }
      />
      <Button variant="primary" onClick={() => null}>
        Sign Up
      </Button>
    </form>
  );
};
