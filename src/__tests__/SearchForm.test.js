import { render, screen } from "@testing-library/react";

import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Manchester",
    setSearchText: jest.fn(),
    handleCitySearch: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        handleCitySearch={validProps.handleCitySearch}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the search button", () => {
    const { getByText } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        handleCitySearch={validProps.handleCitySearch}
      />
    );

    expect(getByText("Search")).toBeInTheDocument();
  });

  it("renders the right placeholder text", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        handleCitySearch={validProps.handleCitySearch}
      />
    );

    const inputNode = screen.getByPlaceholderText("Please enter a location");

    expect(inputNode).toBeInTheDocument();
  });
});
