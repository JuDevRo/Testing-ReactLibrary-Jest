import {screen, render} from '@testing-library/react'
import Layout from '../components/Layout/Layout'

describe('Footer component', () => {
    test('github as a text', () => {
        //Arrange
        render(<Layout/>)
        //Act

        //Assert
        const gitElement = screen.getByText('github', {exact: true})
        expect(gitElement).toBeInTheDocument()
    })
})