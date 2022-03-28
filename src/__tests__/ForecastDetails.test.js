import { render } from "@testing-library/react";

import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 10,
      max: 20,
    },
    humidity: 64,
    wind: {
      speed: 3,
      direction: "Test Direction",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText(/10 °C/)).toHaveClass(
      "forecast-details__temperature__min-temp"
    );
    expect(getByText(/20 °C/)).toHaveClass(
      "forecast-details__temperature__max-temp"
    );
    expect(getByText(/64%/)).toHaveClass("forecast-details__humidity__content");
    expect(getByText(/3 mph/)).toHaveClass(
      "forecast-details__wind__wind-speed"
    );
    expect(getByText(/Test Direction/)).toHaveClass(
      "forecast-details__wind__wind-direction"
    );
  });
});
