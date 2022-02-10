import { InputHTMLAttributes } from 'react';

export interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  color?: string;
  error?: string | boolean;
}

export interface IWrapper {
  error: boolean;
  color?: string;
}
