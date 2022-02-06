import React from 'react'
import ActionButton from '../ActionButton'

import { cleanup, fireEvent } from '@testing-library/react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

afterEach(cleanup)

Enzyme.configure({ adapter: new Adapter() })

it("the button renders without crashing", () => {
	shallow(<ActionButton></ActionButton>)
})

it("is the button label working correctly", () => {
	const button = shallow(<ActionButton label = "click me"></ActionButton>)
	expect(button.text()).toEqual("click me")
})
