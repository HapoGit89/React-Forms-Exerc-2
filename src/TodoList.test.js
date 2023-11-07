import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from "react"
import TodoList from './TodoList';



// Smoke Test

it("renders without crashing", function() {
  render(<TodoList />);
});


// Snapshot Test:

it ("matches Snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});


it("works using the Froms without submitting", function() {
    const { queryByTestId, queryByAltText, getByText } = render(<TodoList />);
    const title = queryByTestId("title")
    const text = queryByTestId("text")
    const button = queryByTestId("submit")
    
  
    // expect both form elements to show
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    // expect both form inputs to be changable
    fireEvent.input(title, {target: {value: 'test'}})
    fireEvent.input(text,{target: {value: 'testing'}})
       
    expect(title).toHaveAttribute('value', 'test')
    expect(text).toHaveAttribute('value', 'testing')

    // submit todo
    fireEvent.click(button)
    expect(getByText("testing")).toBeInTheDocument()
    expect(getByText("X")).toBeInTheDocument()
    const todo = getByText("testing")

    // click delete button and check if todo is gone

    fireEvent.click(getByText("X"))
    expect(todo).not.toBeInTheDocument()

  
    // // expect the second image to show, but not the first
    // expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
    // expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  });