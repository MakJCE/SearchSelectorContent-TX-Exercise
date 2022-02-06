import React from "react";
import AlbumsListService from "../AlbumsList.service";
import AlbumsList from "../AlbumsList";

import { cleanup, fireEvent } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

afterEach(cleanup);

Enzyme.configure({ adapter: new Adapter() });

const searchResultsList = {
  result: [{ kind: "song" }],
  resultCount: 2,
  resultLabel: "",
};

it("the albums list renders without crashing", () => {
  shallow(<AlbumsList searchResultsList={searchResultsList}></AlbumsList>);
});

it("is the result count label working correctly", () => {
  const albumsList = shallow(
    <AlbumsList searchResultsList={searchResultsList}></AlbumsList>
  );
  const resultCountLabel = albumsList.find("#result-count-label");
  expect(resultCountLabel.text()).toEqual("2 matches found");
});

it("is the service is returning data from the api", () => {
  const searchedAlbum = { artist: "jhonny", kind: "all" };
  const setSearchResultsList = (value)=>{searchResultsList = value;};
  AlbumsListService.getSearchigResultsList(
    searchedAlbum,
    searchResultsList,
    setSearchResultsList
  );
  expect(searchResultsList.resultCount).toEqual(2);
});
