import React from "react";
import SearchField from "../SearchField";

import { cleanup } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

afterEach(cleanup);

Enzyme.configure({ adapter: new Adapter() });

it("the dropdown renders without crashing", () => {
  shallow(<SearchField ></SearchField>);
});
