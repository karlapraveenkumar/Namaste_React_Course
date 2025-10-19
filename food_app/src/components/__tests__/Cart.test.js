import { fireEvent, render, screen } from "@testing-library/react";
import { act} from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Deserts 8");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  expect(screen.getByText("🛒Cart (0)")).toBeInTheDocument();

  const addbtns = screen.getAllByRole("button" , {name : "Add +"});
  fireEvent.click(addbtns[0]);
  expect(screen.getByText("🛒Cart (1)")).toBeInTheDocument();

  fireEvent.click(addbtns[1]);
  expect(screen.getByText("🛒Cart (2)")).toBeInTheDocument();

  // 8 From Items List and 2 From Cart , Total to be 10
  expect(screen.getAllByTestId("foodItems").length).toBe(10);
  
  fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  expect(screen.getByText("Cart is empty, add items to the cart")).toBeInTheDocument();
})