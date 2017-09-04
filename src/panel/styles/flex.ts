import { style } from 'typestyle'

export namespace flex {
    export const fixedSmall = style({
        flexBasis: 30,
        flexShrink: 0,
        flexGrow: 0
    })
    
    export const fixedLarge = style({ 
        flexBasis: 320,
        flexShrink: 0,
        flexGrow: 0
    })

    export const fill = style({
        flexBasis: 'auto',
        flexShrink: 1,
        flexGrow: 1,
        position: 'relative'
    })
}
