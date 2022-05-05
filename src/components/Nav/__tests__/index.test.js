import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelect = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelect}
      />
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelect}
      />
    );

    expect(asFragment).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelect}
      />
    );

    expect(screen.getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelect}
      />
    );

    expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(screen.getByTestId("about")).toHaveTextContent("About me");
  });
});
