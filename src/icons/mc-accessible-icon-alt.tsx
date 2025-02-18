import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McAccessibleIconAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16,7a2,2,0,1,0-2-2A2,2,0,0,0,16,7ZM12.7,18.4A4,4,0,1,1,9.05,12a1,1,0,1,0-.22-2A6,6,0,0,0,9.5,22a6,6,0,0,0,4.8-2.4,1,1,0,0,0-1.6-1.2ZM19.5,20h-1V15a1,1,0,0,0-1-1H12.93l1.69-4.66s0-.07,0-.11l0-.2a1.1,1.1,0,0,0,0-.18,1.06,1.06,0,0,0,0-.19,1.4,1.4,0,0,0-.09-.17.72.72,0,0,0-.11-.15.64.64,0,0,0-.15-.13s0-.06-.08-.08L9.71,5.55l-.12,0a1.06,1.06,0,0,0-.19-.06H9a.8.8,0,0,0-.2.07l-.11,0L6,7.13A1,1,0,0,0,6.48,9,1,1,0,0,0,7,8.87l2.23-1.3,3.24,1.88-1.89,5.21a.88.88,0,0,0,0,.16.58.58,0,0,0,0,.18,0,0,0,0,0,0,0,3,3,0,0,0,.08.38l.11.15a.57.57,0,0,0,.11.16.67.67,0,0,0,.14.09,1.22,1.22,0,0,0,.19.12h0a1,1,0,0,0,.34.06h5v5a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2Z'
    }));
};

export default McAccessibleIconAlt;