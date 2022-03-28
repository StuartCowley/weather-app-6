/* eslint-disable no-console */

import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((res) => {
      setSelectedDate(res.data.forecasts[0].date);
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
    })
    .catch((err) => {
      const { status } = err.response;

      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        console.error("Location is not valid", err);
      }

      if (status === 500) {
        setErrorMessage("Oops, servererror, try again later.");
        console.error("Server error", err);
      }
    });
};

export default getForecast;
