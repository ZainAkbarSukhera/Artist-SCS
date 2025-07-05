import React, { InputHTMLAttributes } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({ error, errorMessage, ...rest }) => {
  return (
    <div className={styles.textInputWrapper}>
      <input {...rest} />
      {error && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
