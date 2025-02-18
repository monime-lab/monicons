import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McShieldSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.71,20.29l-16-16h0l-2-2A1,1,0,0,0,2.29,3.71L4,5.41v6.47A9,9,0,0,0,7.77,19.2l3.65,2.61a1,1,0,0,0,1.16,0l3.65-2.61a8.21,8.21,0,0,0,.86-.7l3.2,3.21a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Zm-6.64-2.71L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V7.41l9.67,9.68C15.48,17.26,15.28,17.42,15.07,17.58Zm-5-12.51A10.15,10.15,0,0,0,12,4.19a9.82,9.82,0,0,0,6,1.39v6.3a6.88,6.88,0,0,1-.1,1.18,1,1,0,0,0,.83,1.15h.16a1,1,0,0,0,1-.84,9.77,9.77,0,0,0,.12-1.5V4.43a1,1,0,0,0-.37-.77,1,1,0,0,0-.83-.21,7.89,7.89,0,0,1-6.23-1.27,1,1,0,0,0-1.14,0,8,8,0,0,1-2,1,1,1,0,1,0,.64,1.9Z'
    }));
};

export default McShieldSlash;