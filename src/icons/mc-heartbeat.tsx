import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHeartbeat = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,10.41H18.5a1,1,0,0,0-.71.3L16.55,12l-2.8-3.19a1,1,0,0,0-1.46,0l-1.7,1.7H9a1,1,0,0,0,0,2h2a1,1,0,0,0,.71-.29L13,10.88l2.8,3.19a1,1,0,0,0,.72.34h0a1,1,0,0,0,.71-.29l1.7-1.71H21a1,1,0,0,0,0-2Zm-7.39,5.3-1.9,1.9a1,1,0,0,1-1.42,0L5.08,12.4a3.69,3.69,0,0,1,0-5.22,3.69,3.69,0,0,1,5.21,0,1,1,0,0,0,1.42,0,3.78,3.78,0,0,1,5.21,0,3.94,3.94,0,0,1,.58.75,1,1,0,0,0,1.72-1,6,6,0,0,0-.88-1.13A5.68,5.68,0,0,0,11,5.17,5.68,5.68,0,0,0,2,9.79a5.62,5.62,0,0,0,1.67,4L8.88,19a3,3,0,0,0,4.24,0L15,17.12a1,1,0,0,0,0-1.41A1,1,0,0,0,13.61,15.71Z'
    }));
};

export default McHeartbeat;