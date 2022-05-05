import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

afterEach(cleanup);

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description: "A park bench",
  index: 1,
};

const mockToggleModal = jest.fn();

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);

    expect(asFragment).toMatchSnapshot();
  });
});

describe("Click event", () => {
  it("calls onClose handler", () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);

    fireEvent.click(screen.getByText("Close this modal"));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
