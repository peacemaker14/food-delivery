import { FallbackProps } from "react-error-boundary";

import styles from "./ErrorFallback.module.css";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className={styles.error} role="alert">
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallback;
