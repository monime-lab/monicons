import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMapMarkerSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10.63,5.49a6,6,0,0,1,7.21,7.2,1,1,0,0,0,.74,1.21.9.9,0,0,0,.23,0,1,1,0,0,0,1-.76,8,8,0,0,0-9.61-9.62,1,1,0,0,0,.46,2ZM21.71,20.07,17.44,15.8h0L3.71,2.07a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L5.5,6.69A8,8,0,0,0,6.34,17l4.95,4.95a1,1,0,0,0,1.42,0l4-4,3.56,3.56a1,1,0,0,0,1.42-1.41Zm-9.59-6.76a2,2,0,0,1-1.53-.57A2,2,0,0,1,10,11.21ZM12,19.81,7.76,15.57a6,6,0,0,1-.82-7.44L8.41,9.6a4,4,0,0,0,.76,4.55A4,4,0,0,0,12,15.33a3.93,3.93,0,0,0,1.73-.41l1.58,1.58Z'
    }));
};

export default McMapMarkerSlash;