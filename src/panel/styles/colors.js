import { background } from 'csx/lib'
import { color, hsl, white } from 'csx'

const baseTextColor = hsl(0, 0, 0.2)
const accentColor = hsl(215, 0.26, 0.66)

export const colors = {
    buttonBg: hsl(178, 0.41, 0.63).toHexString(),
    buttonFg: baseTextColor.toHexString(),
    border1: hsl(0, 0, 0.85).toHexString(),
    border2: hsl(0, 0, 0.62).toHexString(),
    fg: baseTextColor.toHexString(),
    toolbarBg: hsl(0, 0, 0.92).toHexString()
}
