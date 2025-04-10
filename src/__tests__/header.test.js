import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Cart from "../cart";

describe("Header component on screen", () => {
  test("should show whether is showing login button or not ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });
  test("should show cart most have 0 value in it ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
    const cartZero = screen.getByText(/^Cart$/);
    expect(cartZero).toBeInTheDocument();
  });
  test("should also show the login/logout toggle problem", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
