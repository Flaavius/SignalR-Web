import React from "react";
import { shallow } from "enzyme";

import Header from "../src/components/header/Header";

describe("Header", () => {
  it("Renders Header Component", () => {
    const header = shallow(<Header api="test_api" />);
    expect(header.find(".brand h1").text()).toEqual("SignalR Web");
    expect(header.find(".button").text()).toEqual("Connect");
  });
});
