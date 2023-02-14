import {render, screen} from '@testing-library/react'
import About from '../containers/About/About'
import { BrowserRouter } from "react-router-dom";

let mockPath = "/";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: mockPath,
  }),
}));


describe('About component', () => {
    test('render My name is as a text', () => {
        //Arrange
        render(
            <BrowserRouter>
                <About/>
            </BrowserRouter>
        )
        
        //Act

        //Assert
        const myNameIs = screen.getByText("My name is", {exact: false})
        expect(myNameIs).toBeInTheDocument()
    })
})