import { render } from "@testing-library/react";

import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    icon: "800",
    temperature: {
      min: 10,
      max: 20,
    },
    description: "Test Description",
    handleForecastSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        icon={validProps.icon}
        temperature={validProps.temperature}
        description={validProps.description}
        handleForecastSelect={validProps.handleForecastSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        icon={validProps.icon}
        temperature={validProps.temperature}
        description={validProps.description}
        handleForecastSelect={validProps.handleForecastSelect}
      />
    );

    expect(getByText("Thu 1st Jan")).toHaveClass(
      "forecast-summary__date__content"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("20 °C")).toHaveClass(
      "forecast-summary__temperature__content"
    );
    expect(getByText("Test Description")).toHaveClass(
      "forecast-summary__description__content"
    );
    expect(getByText("More Details")).toHaveClass(
      "forecast-summary__more-details__button"
    );
  });
});
