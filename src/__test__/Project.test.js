import {render, screen} from '@testing-library/react'
import Projects from '../containers/Projects/Projects'
import { BrowserRouter } from "react-router-dom";

let mockPath = "/";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: mockPath,
  }),
}));


describe('Projects component', () => {
    test('render portfolio', () => {
        mockPath = "projects"
        //Arrange
        render(
            <BrowserRouter>
                <Projects />
            </BrowserRouter>
        )
        
        //Act

        //Assert
        const toOpenELement = screen.getByText("Click to open", {exact: true})
        expect(toOpenELement).toBeInTheDocument()
    })
})