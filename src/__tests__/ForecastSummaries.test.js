import { render } from "@testing-library/react";

import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        icon: 800,
        temperature: {
          min: 10,
          max: 20,
        },
        description: "Test Description",
      },
      {
        date: 1648376637,
        icon: 602,
        temperature: {
          min: 10,
          max: 20,
        },
        description: "Test Description",
      },
    ],
    handleForecastSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        handleForecastSelect={validProps.handleForecastSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        handleForecastSelect={validProps.handleForecastSelect}
      />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
