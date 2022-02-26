import ArrowRightIcon from './icons/arrow-right.svg'
import CheckIcon from './icons/check.svg'
import RefreshIcon from './icons/refresh.svg'

export const SetIcon = (icon: string) => {
  if (icon === 'arrow-right') {
    return <ArrowRightIcon />
  }
  if (icon === 'check') {
    return <CheckIcon />
  }
  if (icon === 'refresh') {
    return <RefreshIcon />
  }
}
