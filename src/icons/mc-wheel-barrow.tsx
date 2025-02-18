import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McWheelBarrow = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,2H19l-.09,0-.21,0-.16.07-.17.11a.8.8,0,0,0-.13.13.86.86,0,0,0-.1.16.71.71,0,0,0-.08.18l0,.09L17.38,6H16.24L13.12,2.89a3.06,3.06,0,0,0-4.24,0L5.76,6H3a1,1,0,0,0-.87.5,1,1,0,0,0,0,1l4,7h0L5.36,16A2.2,2.2,0,0,0,5,16a3,3,0,1,0,3,3,3,3,0,0,0-.85-2.08l1-2,1.38-.14,3.94,5.91A2.93,2.93,0,0,0,16,22a3.18,3.18,0,0,0,1.13-.21A3,3,0,0,0,19,18.49L18,13l1.79-9H21a1,1,0,0,0,0-2ZM5,20a1,1,0,1,1,1-1A1,1,0,0,1,5,20ZM10.3,4.29a1,1,0,0,1,1.4,0L13.41,6H8.59ZM7.55,12.94,4.72,8H17l-.82,4.08Zm8.81,7a1,1,0,0,1-1.2-.38l-3.34-5,4.37-.43L17,18.82A1,1,0,0,1,16.36,19.93Z'
    }));
};

export default McWheelBarrow;