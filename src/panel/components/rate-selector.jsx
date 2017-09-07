import Vue from 'vue'
import Component from 'vue-class-component'
import { style } from 'typestyle'

@Component
export class RateSelector extends Vue {
    styles = style({})
    render() {
        return (
            <div class={this.styles}>
                <select>
                    <option value=".1">10%</option>
                    <option value=".5">50%</option>
                    <option selected value="1">
                        100%
                    </option>
                </select>
            </div>
        )
    }
}
