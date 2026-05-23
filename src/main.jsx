import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InvoiceGenerator from "./InvoiceGenerator";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InvoiceGenerator />
  </StrictMode>
);
