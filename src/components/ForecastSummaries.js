import PropTypes from "prop-types";

import ForecastSummary from "./ForecastSummary";

import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts, handleForecastSelect }) {
  return (
    <section className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          icon={forecast.icon.toString()}
          temperature={forecast.temperature}
          description={forecast.description}
          handleForecastSelect={handleForecastSelect}
        />
      ))}
    </section>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
