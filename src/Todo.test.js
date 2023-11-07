import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react"
import Todo from './Todo';



// Smoke Test

it("renders without crashing", function() {
  render(<Todo text="testing" title="test" />);
});


// Snapshot Test:

it ("matches Snapshot", function() {
  const {asFragment} = render( <Todo text="testing" title="test" />);
  expect(asFragment()).toMatchSnapshot();
});


