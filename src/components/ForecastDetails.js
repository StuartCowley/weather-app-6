import PropTypes from "prop-types";
import moment from "moment";

import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;

  return (
    <section className="forecast-details">
      <article className="forecast-details__date">
        <p className="forecast-details__date__content">
          <strong>{moment(date).format("ddd Do MMM")}</strong>
        </p>
      </article>

      <article className="forecast-details__temperature">
        <p className="forecast-details__temperature__min-temp">
          Min Temp: {temperature.min} &deg;C
        </p>
        <p className="forecast-details__temperature__max-temp">
          Max Temp: {temperature.max} &deg;C
        </p>
      </article>

      <article className="forecast-details__humidity">
        <p className="forecast-details__humidity__content">
          Humidity: {humidity}%
        </p>
      </article>

      <article className="forecast-details__wind">
        <p className="forecast-details__wind__wind-speed">
          Wind Speed: {wind.speed} mph
        </p>
        <p className="forecast-details__wind__wind-direction">
          Wind Direction: {wind.direction}
        </p>
      </article>
    </section>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
