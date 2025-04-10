import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockRes.json";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("should work the top rated button in the font page ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole("button", {
    name: "Top rated restaurant",
  });
  const TopRatedRes = screen.getAllByTestId("TopRated");
  fireEvent.click(searchBtn);
  const result = await screen.getAllByTestId("TopRatedNext");
  expect(result.length).toBe(1);
});
