import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ChildrenIconWrapper, StyledButton } from './styles'
import { ThemeProvider } from 'styled-components'
import { primary, secondary } from './theme'
import { SetIcon } from './icon'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
  icon?: 'arrow-right' | 'check' | 'refresh' | undefined
  children?: ReactNode
}

export function LemonButton ({
  color = 'primary',
  children,
  icon,
  ...props
}: Props) {
  const theme = {
    primary: primary,
    secondary: secondary
  }

  return (
    <ThemeProvider theme={theme[color]}>
      <StyledButton {...props}>
        {icon && children
          ? <ChildrenIconWrapper>
            {children}
            {SetIcon(icon)}
          </ChildrenIconWrapper>
          : children}
      </StyledButton>
    </ThemeProvider>
  )
}
