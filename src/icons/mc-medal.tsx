import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMedal = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.38,5.76a1,1,0,0,0-.47-.61l-5.2-3a1,1,0,0,0-1.37.36L12,6.57,9.66,2.51a1,1,0,0,0-1.37-.36l-5.2,3a1,1,0,0,0-.47.61,1,1,0,0,0,.1.75l4,6.83A5.91,5.91,0,0,0,6,16a6,6,0,1,0,11.34-2.72l3.9-6.76A1,1,0,0,0,21.38,5.76ZM5,6.38l3.46-2L11.68,10A5.94,5.94,0,0,0,8,11.58ZM12,20a4,4,0,0,1-4-4,4,4,0,0,1,4-4,4,4,0,1,1,0,8Zm4-8.45a5.9,5.9,0,0,0-1.86-1.15L13.16,8.57l2.42-4.19,3.46,2Z'
    }));
};

export default McMedal;