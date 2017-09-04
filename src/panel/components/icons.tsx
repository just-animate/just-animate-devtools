import Vue from 'vue'
import Component from 'vue-class-component'
import { style } from 'typestyle'

export const icons = {
    contextMenu: 'M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z',
    download: 'M17 13h6l-11 11-11-11h6v-13h10z',
    pause: 'M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z',
    play: 'M3 22v-20l18 10-18 10z',
    plus: 'M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z',
    reverse: 'M6 13v4l-6-5 6-5v4h3v2h-3zm9-2v2h3v4l6-5-6-5v4h-3zm-4-6v14h2v-14h-2z',
    stop: 'M24 0h-24v24h24v-24'
}

@Component
export class IconDefs extends Vue { 
    styles = style({
        display: 'none'
    })
    render() {
        const iconList = Object
            .keys(icons)
            .map(key => <symbol id={'icon_' + key}><path d={icons[key]} /></symbol>)
        
        return (
            <svg xmlns="http://www.w3.org/2000/svg" class={this.styles}>
                {iconList}
            </svg>
        )
    }
}
