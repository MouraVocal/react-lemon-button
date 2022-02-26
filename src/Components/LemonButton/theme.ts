interface ThemeProps {
  backgroundColor: string
  hoverBackgroundColor: string
  activeBackgroundColor: string
  disabledBackgroundColor: string
  textColor: string
  disabledTextColor: string
}

export const primary: ThemeProps = {
  backgroundColor: '#026C00',
  hoverBackgroundColor: '#079504',
  activeBackgroundColor: '#013C00',
  disabledBackgroundColor: '#B7D0B6',
  textColor: '#FFFFFF',
  disabledTextColor: '#FFFFFF'
}

export const secondary: ThemeProps = {
  backgroundColor: '#F7C346',
  hoverBackgroundColor: '#FFDF77',
  disabledBackgroundColor: '#FFE58D',
  activeBackgroundColor: '#DCAC0D',
  textColor: '#000000',
  disabledTextColor: '#FFFFFF'
}
