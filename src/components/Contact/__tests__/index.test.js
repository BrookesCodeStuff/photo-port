import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment).toMatchSnapshot();
  });
});

describe("h1 tag is visible", () => {
  it("matches contact me header", () => {
    render(<Contact />);

    expect(screen.getByTestId("h1")).toHaveTextContent("Contact me");
  });
});

describe("visible submit button", () => {
  it("creates submit button", () => {
    render(<Contact />);

    expect(screen.getByTestId("submitBtn")).toHaveTextContent("Submit");
  });
});
