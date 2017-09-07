import { style } from 'typestyle'

export const flex = {
    fixedSmall: style({
        flexBasis: 30,
        flexShrink: 0,
        flexGrow: 0
    }),
    fixedLarge: style({ 
        flexBasis: 320,
        flexShrink: 0,
        flexGrow: 0
    }),
    fill: style({
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 1,
        position: 'relative'
    })
}
