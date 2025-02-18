import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McTumblrAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M17.43359,20.50825l-.96191-2.85351a1.00073,1.00073,0,0,0-1.37891-.583,3.7631,3.7631,0,0,1-1.209.249.93653.93653,0,0,1-.65918-.165,1.20025,1.20025,0,0,1-.23926-.80762V12.00044H16.002a.99942.99942,0,0,0,1-1V7.09517a.99942.99942,0,0,0-1-1H13V2.00044a.99942.99942,0,0,0-1-1H9.07031a1.14806,1.14806,0,0,0-1.13769,1.04A5.09342,5.09342,0,0,1,4.65234,6.59809a.99923.99923,0,0,0-.66113.94043v3.584a.99943.99943,0,0,0,1,1H6.01562v4.53516a6.41109,6.41109,0,0,0,1.88672,4.47851A6.90463,6.90463,0,0,0,12.877,22.99946c.05371,0,.1084,0,.16309-.001,1.5459-.0254,3.61816-.64747,4.27246-1.60743A.99833.99833,0,0,0,17.43359,20.50825Zm-4.42675.49024A4.87007,4.87007,0,0,1,9.30469,19.7104a4.36971,4.36971,0,0,1-1.28907-3.05273V11.12251a.99942.99942,0,0,0-1-1H5.99121v-1.917A6.95438,6.95438,0,0,0,9.80957,3.00044H11V7.09517a.99943.99943,0,0,0,1,1h3.002v1.90527h-3.0166a.99942.99942,0,0,0-1,1V16.3647a3.07681,3.07681,0,0,0,.85645,2.23535,2.76714,2.76714,0,0,0,2.0957.7207,5.90822,5.90822,0,0,0,.94727-.11328l.4248,1.25879A5.909,5.909,0,0,1,13.00684,20.99849Z'
    }));
};

export default McTumblrAlt;