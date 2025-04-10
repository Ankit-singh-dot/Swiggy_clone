import { render, screen } from "@testing-library/react";
import RestaurantCard from "../restaurentCard";
import MOCK_DATA from ".././mocks/restaurentCarsMocks.json";
import { withPromotedLabel } from "../restaurentCard";
import "@testing-library/jest-dom";
const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
test("should have promoted batch", () => {
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);
  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument();
});

