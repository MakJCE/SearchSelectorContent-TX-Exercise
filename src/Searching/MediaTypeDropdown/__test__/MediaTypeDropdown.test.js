import React from "react";
import MediaTypeDropdown from "../MediaTypeDropdown";

import { cleanup } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

afterEach(cleanup);

Enzyme.configure({ adapter: new Adapter() });

it("the dropdown renders without crashing", () => {
  shallow(<MediaTypeDropdown ></MediaTypeDropdown>);
});

// it("the dropdown present the kind song in the third option", () => {
//   const dropdown = shallow(<MediaTypeDropdown ></MediaTypeDropdown>);
//   dropdown.simulate("click");
//   const thirdOption = dropdown.find('li').at(3);
//   console.log("---->", thirdOption);
//   expect(thirdOption.text()).toEqual("Song");
// });