import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import App from "../App";

test("renders welcome header", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Welcome to Duck Tracks!/i)).toBeInTheDocument();
});
