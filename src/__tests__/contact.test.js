import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";
describe("Contact Us Page Test Case",()=>{
test("should load on contact us page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("should load 3 input boxes on the content components ", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(3);
});
})

