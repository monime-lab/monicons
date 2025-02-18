import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McPresentationTimes = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M9.29,11.71a1,1,0,0,0,1.42,0L12,10.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,9l1.3-1.29a1,1,0,1,0-1.42-1.42L12,7.59l-1.29-1.3A1,1,0,0,0,9.29,7.71L10.59,9l-1.3,1.29A1,1,0,0,0,9.29,11.71ZM21,14H20V4h1a1,1,0,0,0,0-2H3A1,1,0,0,0,3,4H4V14H3a1,1,0,0,0,0,2h8v1.15l-4.55,3A1,1,0,0,0,7,22a.94.94,0,0,0,.55-.17L11,19.55V21a1,1,0,0,0,2,0V19.55l3.45,2.28A.94.94,0,0,0,17,22a1,1,0,0,0,.55-1.83l-4.55-3V16h8a1,1,0,0,0,0-2Zm-3,0H6V4H18Z'
    }));
};

export default McPresentationTimes;