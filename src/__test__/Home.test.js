import {render, screen} from '@testing-library/react'
import Home from '../containers/Home/Home'
import { BrowserRouter } from "react-router-dom";

let mockPath = "/";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: mockPath,
  }),
}));

describe('Home component', () => {
    test('render the titles', () => {
        //Arrange
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
          )
        //Act
        //...nothing
        //Assert
        const rolTitleElement = screen.getByText('Jr FullStack Web Developer', {exact: true})
        expect(rolTitleElement).toBeInTheDocument()
    })
})
