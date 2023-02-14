import {render, screen} from '@testing-library/react'
import Main from '../containers/Main/Main'
import Home from '../containers/Home/Home'
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"

let mockPath = "/";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: mockPath,
  }),
}));


describe('Main component', () => {
    test('render portfolio', () => {
        //Arrange
        render(
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        )
        
        //Act

        //Assert
        const thisIsThePortfolio = screen.getByText("This is the portfolio", {exact: false})
        expect(thisIsThePortfolio).toBeInTheDocument()
    })
})