import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McUtensilsAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M15.53,14.13a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l6.18,6.18a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41Zm1.23-2.49a3,3,0,0,0,2.12-.88l2.83-2.83a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L17.46,9.35a1,1,0,0,1-1.41,0l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L14.64,7.93h0a1,1,0,0,1,0-1.41l2.82-2.83a1,1,0,1,0-1.41-1.41L13.22,5.11a3,3,0,0,0,0,4.24h0L12,10.59,10.44,9.05a4.16,4.16,0,0,0-.74-5C8.26,2.61,4.53,1,2.77,2.79S2.6,8.27,4,9.72A4.36,4.36,0,0,0,6.94,11h.14A3.88,3.88,0,0,0,9,10.46L10.57,12,2.29,20.28a1,1,0,1,0,1.42,1.41l9-9,0,0,0,0,1.92-1.92A3,3,0,0,0,16.76,11.64ZM8.43,8.44A1.93,1.93,0,0,1,7,9,2.26,2.26,0,0,1,5.46,8.3C4.38,7.22,3.62,4.77,4.19,4.2A1,1,0,0,1,4.85,4,5.87,5.87,0,0,1,8.29,5.47,2.12,2.12,0,0,1,8.43,8.44Z'
    }));
};

export default McUtensilsAlt;