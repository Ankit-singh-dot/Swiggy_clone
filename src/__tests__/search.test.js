import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRes.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantMenu from "../restaurant ";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
  },
  });
});
test("should work the feature of search bar ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cards =await screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2)

  expect(searchBtn).toBeInTheDocument();
});
