import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHtml3Alt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7.95215,8.00044h6.98633l-.17719,2H9.99121a1,1,0,0,0,0,2h4.59284L14.32031,14.977l-2.3291.52832L9.66309,14.976l-.09571-1.06445a1,1,0,1,0-1.99218.17774l.16015,1.79a1.00142,1.00142,0,0,0,.77442.88672l3.25976.74024a1.0188,1.0188,0,0,0,.44336,0l3.26074-.74024a1.00139,1.00139,0,0,0,.77442-.88769l.43158-4.86792.002-.01-.00079-.00391.34649-3.9082a1.001,1.001,0,0,0-.99609-1.08789H7.95215a1,1,0,0,0,0,2ZM20.6543,2.32563a1.002,1.002,0,0,0-.73828-.32519H4.06641a.99963.99963,0,0,0-.9961,1.08887L4.51367,19.28364a.999.999,0,0,0,.72754.874l6.47266,1.80566a.99028.99028,0,0,0,.53711,0l6.49023-1.8125a.999.999,0,0,0,.72754-.874l1.44336-16.1875A1.00166,1.00166,0,0,0,20.6543,2.32563Zm-3.11621,16.085-5.55567,1.55176L6.44434,18.41743,5.15918,4.00044H18.82324Z'
    }));
};

export default McHtml3Alt;