import { background } from 'csx/lib';
import { color, hsl, white } from 'csx'

export namespace colors { 
  const baseTextColor = hsl(0, 0, .20)
  const accentColor = hsl(215, .26, .66)
  
  
  export const buttonBg = hsl(178, .41, .63).toHexString()
  export const buttonFg = baseTextColor.toHexString()
  
  export const border1 = hsl(0, 0, .85).toHexString()
  export const border2 = hsl(0, 0, .62).toHexString()
  export const fg = baseTextColor.toHexString()
  export const toolbarBg = hsl(0, 0, .92).toHexString()
}