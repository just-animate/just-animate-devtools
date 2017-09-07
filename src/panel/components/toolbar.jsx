import Vue from 'vue'
import Component from 'vue-class-component'
import { style, classes } from 'typestyle'
import { colors } from '../styles/colors'
import { flex } from '../styles/flex'
import { borders } from '../styles/borders'
import { icons } from './icons'
import { ButtonIcon } from './button-icon'
import { TimelineSelector } from './timeline-selector'
import { RangeSelector } from './range-selector'
import { px, list } from 'csx'
import { RateSelector } from './rate-selector'
import { ProgressBar } from './progress-bar'

@Component
export class Toolbar extends Vue {
    styles = style({
        alignItems: 'stretch',
        backgroundColor: colors.toolbarBg,
        borderBottom: borders.level1,
        display: 'flex',
        height: px(40),
        justifyContent: 'space-between',
        lineHeight: px(40)
    })
    leftPanel = style({
        alignItems: 'center',
        borderRight: borders.level2,
        display: 'flex',
        justifyContent: 'space-around'
    })
    rightPanel = style({
        alignItems: 'center',
        borderLeft: borders.level2,
        display: 'flex',
        justifyContent: 'space-around'
    })
    render() {
        return (
            <div class={this.styles}>
                <div class={classes(flex.fixedLarge, this.leftPanel)}>
                    <ButtonIcon iconName="plus" />
                    <TimelineSelector />
                    <div>
                        <ButtonIcon iconName="play" type="normal" />
                        <ButtonIcon iconName="pause" type="normal" />
                        <ButtonIcon iconName="stop" type="normal" />
                        <ButtonIcon iconName="reverse" type="normal" />
                    </div>
                    <ButtonIcon iconName="contextMenu" />
                </div>
                <div class={flex.fill}>
                    <ProgressBar />
                </div>
                <div class={classes(flex.fixedLarge, this.rightPanel)}>
                    <RangeSelector />
                    <RateSelector />
                    <ButtonIcon iconName="download" type="normal" />
                </div>
            </div>
        )
    }
}
