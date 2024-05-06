import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page link", () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Travel Blog/i);
  expect(linkElements[0]).toBeInTheDocument();
});
