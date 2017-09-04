import { cssRule } from 'typestyle'
import { colors } from './colors'

export function applyBaseStyles() {
    cssRule(
        'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,' +
            'p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,' +
            'img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,' +
            'center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,' +
            'tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,' +
            'footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video',
        {
            margin: 0,
            padding: 0,
            border: 0,
            boxSizing: 'border-box',
            fontSize: '100%',
            font: 'inherit',
            verticalAlign: 'baseline'
        }
    )

    cssRule('html,body', {
        fontFamily: '"Helvetica Neue"',
        fontSize: '12pt',
        height: '100%'
    })

    cssRule('body', {
        color: colors.fg,
        lineHeight: 1,
    })

    cssRule('article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section', {
        display: 'block'
    })

    cssRule('ol,ul', {
        listStyle: 'none'
    })

    cssRule('blockquote,q', {
        quotes: 'none'
    })

    cssRule('blockquote:before,blockquote:after,q:before,q:after', {
        content: [`''`, 'none']
    })

    cssRule('table', {
        borderCollapse: 'collapse',
        borderSpacing: 0
    })
}
