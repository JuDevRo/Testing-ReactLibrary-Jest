import {screen, render} from '@testing-library/react'
import Footer from '../components/Footer/Footer'

describe('Footer component', () => {
    test('github as a text', () => {
        //Arrange
        render(<Footer />)
        //Act

        //Assert
        const gitElement = screen.getByText('github', {exact: true})
        expect(gitElement).toBeInTheDocument()
    })
})