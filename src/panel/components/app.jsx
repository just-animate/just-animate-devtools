import Vue from 'vue'
import Component from 'vue-class-component'
import { style } from 'typestyle'
import { colors } from '../styles'
import { TargetPanel } from './target-panel'
import { PropertyPanel } from './property-panel'
import { Toolbar } from './toolbar'
import { flex } from '../styles/flex'
import { IconDefs } from './icons'
import { ProgressBar } from './progress-bar'

@Component
export class App extends Vue {
    styles = style({
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    })
    scrollContainer = style({
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'space-between',
        overflow: 'hidden'
    })
    render() {
        return (
            <div class={this.styles}>
                <IconDefs />
                <div class={flex.fixedSmall}>
                    <Toolbar />
                </div>
                <div class={this.scrollContainer}>
                    <div class={flex.fixedLarge}>
                        <TargetPanel />
                    </div>
                    <div class={flex.fill}>
                        <ProgressBar />
                    </div>
                    <div class={flex.fixedLarge}>
                        <PropertyPanel />
                    </div>
                </div>
            </div>
        )
    }
}
