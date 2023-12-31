import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react"



// Smoke Test

it("renders without crashing", function() {
  render(<App />);
});


// Snapshot Test:

it ("matches Snapshot", function() {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});


