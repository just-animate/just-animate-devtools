import Vue from 'vue'
import Component from 'vue-class-component'
import { style } from 'typestyle'

@Component
export class RangeSelector extends Vue {
    styles = style({ 
        $nest: {
            '>*': {
                marginLeft: 4,
                marginRight: 4,
                verticalAlign: 'middle'
            },
            span: {
                
            },
            input: {
                width: 65
            }
        }
    })
    render() {
        return (
            <div class={this.styles}> 
                <input type="number" step="1" placeholder="0" />
                <span>of</span>
                <input type="number" step="1" placeholder="1000" />
            </div>
        )
    }
}
