import styled from 'styled-components'

export const StyledButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  &:hover {
    background-color: ${props => props.theme.hoverBackgroundColor};
  }

  &:active {
    background-color: ${props => props.theme.activeBackgroundColor};
  }

  &:disabled {
    background-color: ${props => props.theme.disabledBackgroundColor};
    color: ${props => props.theme.disabledTextColor};
  }
  
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  min-width: 311px;
  width: 100%;
  height: 56px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: none;
`
export const ChildrenIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`
