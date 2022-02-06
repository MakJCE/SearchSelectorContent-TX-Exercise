import React from "react";
import Album from "../Album";

import { cleanup } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

afterEach(cleanup);

Enzyme.configure({ adapter: new Adapter() });
const albumData = { trackName: "beat it", artistName: "Michael Jackson", kind:"song" };

it("the albums renders without crashing", () => {
  shallow(<Album albumData={albumData}></Album>);
});

it("is the track name label working correctly", () => {
  const album = shallow(
    <Album albumData={albumData}></Album>
  );
  const trackName = album.find("#track-name");
  expect(trackName.text()).toEqual("beat it");
});

it("is the artist name label working correctly", () => {
  const album = shallow(
    <Album albumData={albumData}></Album>
  );
  const artistName = album.find("#artist-name");
  expect(artistName.text()).toEqual("by Michael Jackson");
});

it("is the track kind label working correctly", () => {
  const album = shallow(
    <Album albumData={albumData}></Album>
  );
  const trackKind = album.find("#track-kind");
  expect(trackKind.text()).toEqual("song");
});
