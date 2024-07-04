import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders hello message", () => {
  render(<App />);
  expect(
    screen.getByText(/Hello, React with TypeScript and HMR!/i),
  ).toBeInTheDocument();
});
