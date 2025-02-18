import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McNinja = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.44,5.34l-.06-.07a10,10,0,0,0-14.76,0l-.06.07A10,10,0,1,0,22,12,9.93,9.93,0,0,0,19.44,5.34ZM12,4a7.87,7.87,0,0,1,3.86,1H8.14A7.87,7.87,0,0,1,12,4ZM5.76,7H18.24a8,8,0,0,1,1.69,4H4.07A8,8,0,0,1,5.76,7ZM12,20a8,8,0,0,1-7.93-7H19.93A8,8,0,0,1,12,20ZM8,8A1,1,0,1,0,9,9,1,1,0,0,0,8,8Zm6,0a1,1,0,1,0,1,1A1,1,0,0,0,14,8Zm-3,9.93a1,1,0,0,0,.49.13,1,1,0,0,0,.87-.51A3,3,0,0,1,15,16a1,1,0,0,0,0-2,5,5,0,0,0-4.37,2.57A1,1,0,0,0,11,17.93Z'
    }));
};

export default McNinja;