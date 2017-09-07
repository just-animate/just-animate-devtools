import Vue from 'vue'
import Component from 'vue-class-component'
import { style } from 'typestyle'
import { colors } from '../styles/colors'
import { borders } from '../styles/borders'

@Component
export class TargetPanel extends Vue {
    styles = style({
        borderRight: borders.level2,
        height: '100%'
    })
    render() {
        return <div class={this.styles} />
    }
}
