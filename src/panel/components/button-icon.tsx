import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { icons } from './icons'
import { style, classes } from 'typestyle/lib'
import { colors } from '../styles/colors'

const iconSize = 13

const baseIconClass = style({    
    cursor: 'pointer',
    height: iconSize,
    margin: 2,
    padding: '5px 10px',
    position: 'relative',
    transform: 'scale(1)',
    transitionProperty: 'transform',
    transitionDuration: '300ms',
    width: iconSize,
    zIndex: 1,
    $nest: {
        '&:hover': {
            transform: 'scale(1.1)',
            zIndex: 2    
        }
    }
})

const typeStyles = {
    flat: style({ }),
    normal: style({
        backgroundColor: colors.buttonBg,
        fill: colors.buttonFg,
        border: 'solid thin darkgray',
        borderRadius: 5
    })
}

@Component
export class ButtonIcon extends Vue {
    
    @Prop() type: keyof typeof typeStyles
    
    @Prop() iconName: keyof typeof icons

    
    render() {
        const styles = classes(baseIconClass, typeStyles[this.type])
        
        return (
            <svg class={styles} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 24 24`}>
                <use xlinkHref={"#icon_" + this.iconName} />
            </svg> 
        )
    }
}