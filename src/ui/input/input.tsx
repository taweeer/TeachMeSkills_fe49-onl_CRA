import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
};

export const Input: React.FC<Props> = ({ labelText, error, ...restProps }) => {
  return (
    <Label>
      <div>{labelText}</div>
      <InputWrapper $borderColor={error ? 'red' : undefined} {...restProps} />
      <Error>{error}</Error>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  width: fit-content;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  all: unset;
  box-sizing: border-box;
  border: 1px solid ${({ $borderColor }) => $borderColor || 'black'};

  &:focus-visible {
    border: 1px solid ${({ $borderColor }) => $borderColor || '#CCCCCCCC'};
  }
`;

const Error = styled.div`
  height: 20px;
  color: red;
`;
