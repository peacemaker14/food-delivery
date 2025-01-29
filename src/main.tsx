import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App.tsx";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
