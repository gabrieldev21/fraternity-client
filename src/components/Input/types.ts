export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export interface WrapperProps {
  error?: string;
}