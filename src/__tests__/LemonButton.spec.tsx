import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

// Components
import { LemonButton } from '../Components/LemonButton'

// Styles
import { primary, secondary } from '../Components/LemonButton/theme'

describe('Lemon Button', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<LemonButton />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should show correct primary styles', () => {
    const { getByRole } = render(<LemonButton />)
    expect(getByRole('button')).toHaveStyle(`
      background-color: ${primary.backgroundColor};
      color: ${primary.textColor};
      border: none
      `)
  })

  it('should show correct secondary styles', () => {
    const { getByRole } = render(<LemonButton color='secondary' />)
    expect(getByRole('button')).toHaveStyle(`
      background-color: ${secondary.backgroundColor};
      color: ${secondary.textColor};
      border: none
      `)
  })

  it('should not show only icon', () => {
    const { getByRole } = render(<LemonButton icon='arrow-right'></LemonButton>)
    expect(getByRole('button')).not.toHaveAttribute('children')
  })

  it('should inherit HTML button props', () => {
    const { getByRole } = render(<LemonButton />)
    expect(getByRole('button')).toBeInstanceOf(HTMLButtonElement)
  })

  it('should have onClick event', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<LemonButton onClick={handleClick}>Click on Me</LemonButton>)
    fireEvent.click(getByText(/click on me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should be disabled', () => {
    const { getByText } = render(<LemonButton disabled>Try click on me</LemonButton>)
    expect(getByText(/try click on me/i)).toBeDisabled()
  })
})
