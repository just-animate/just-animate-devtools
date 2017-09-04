import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { style } from 'typestyle' 
import { px } from 'csx'

@Component
export class TimelineSelector extends Vue { 
    render() {
        return (
            <div>
                <select>
                    <option>Timeline 1</option>
                </select>
            </div>
        )
    }
}
