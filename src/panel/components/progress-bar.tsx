import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { style } from 'typestyle'

@Component
export class ProgressBar extends Vue {
    @Prop() progress: number
    
    styles = style({
        backgroundColor: 'red',
        height: '100%',
        position: 'absolute',
        width: 2
    })
    
    render() {
        const position = (Math.min(1, this.progress || 0) * 100) + '%'
        return <div class={this.styles} style={{ left: position }}></div>
    }
}
