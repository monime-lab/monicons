import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMapMarkerShield = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14.41,6.53a2.24,2.24,0,0,1-1.82-.39,1,1,0,0,0-1.18,0,2.24,2.24,0,0,1-1.82.39,1,1,0,0,0-.84.2,1,1,0,0,0-.37.78v2.9A4.14,4.14,0,0,0,10,13.74l1.37,1a1,1,0,0,0,1.18,0l1.37-1a4.14,4.14,0,0,0,1.66-3.33V7.51a1,1,0,0,0-.37-.78A1,1,0,0,0,14.41,6.53Zm-.79,3.88a2.15,2.15,0,0,1-.85,1.73l-.77.57-.77-.57a2.15,2.15,0,0,1-.85-1.73V8.57A4.22,4.22,0,0,0,12,8.12a4.22,4.22,0,0,0,1.62.45Zm6.84-.78A8.5,8.5,0,0,0,7.3,3.36,8.56,8.56,0,0,0,3.54,9.63,8.46,8.46,0,0,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05Z'
    }));
};

export default McMapMarkerShield;