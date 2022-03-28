import { render } from "@testing-library/react";

import App from "../components/App";

describe("App", () => {
  it("renders the App component correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
