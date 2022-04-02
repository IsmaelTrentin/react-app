import { CSSObject } from '@mantine/core'

export const noselect: CSSObject = {
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none'
}
export const view: CSSObject = {
  padding: '2.5 rem',
  opacity: 0,
  animation: 'opacity-in 350ms ease forwards'
}