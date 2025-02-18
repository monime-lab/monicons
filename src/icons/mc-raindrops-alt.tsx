import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McRaindropsAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M9,7.75C9,5,6.42,3.24,6.31,3.17a1,1,0,0,0-1.12,0C5.08,3.25,2.5,5,2.5,7.75a3.25,3.25,0,0,0,6.5,0ZM5.75,9A1.25,1.25,0,0,1,4.5,7.75,3.66,3.66,0,0,1,5.75,5.3,3.61,3.61,0,0,1,7,7.75,1.25,1.25,0,0,1,5.75,9Zm6.06,1.17a1,1,0,0,0-1.12,0c-.17.12-4.19,2.9-4.19,7.08a4.75,4.75,0,0,0,9.5,0C16,13,12,10.28,11.81,10.17ZM11.25,20A2.75,2.75,0,0,1,8.5,17.25c0-2.31,1.81-4.17,2.76-5,.94.79,2.74,2.63,2.74,5A2.75,2.75,0,0,1,11.25,20ZM18.06,2.17a1,1,0,0,0-1.12,0C16.8,2.27,13.5,4.55,13.5,8a4,4,0,0,0,8,0C21.5,4.51,18.2,2.26,18.06,2.17ZM17.5,10a2,2,0,0,1-2-2,5.44,5.44,0,0,1,2-3.72A5.39,5.39,0,0,1,19.5,8,2,2,0,0,1,17.5,10Z'
    }));
};

export default McRaindropsAlt;