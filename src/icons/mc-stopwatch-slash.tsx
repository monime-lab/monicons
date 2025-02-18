import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McStopwatchSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10.6,5.63a1,1,0,0,0,.36,2,6.18,6.18,0,0,1,1-.09,6,6,0,0,1,6,6,6.18,6.18,0,0,1-.09,1,1,1,0,0,0,.8,1.16l.18,0a1,1,0,0,0,1-.82A7.45,7.45,0,0,0,20,13.5a8,8,0,0,0-1.7-4.91l.91-.9a1,1,0,0,0-1.42-1.42l-.9.91A8,8,0,0,0,12,5.5,7.45,7.45,0,0,0,10.6,5.63ZM10,4.5h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Zm3.49,9.08s0-.05,0-.08,0-.05,0-.08l1.34-1.33a1,1,0,1,0-1.42-1.42L12.08,12h-.16L5.71,5.79A1,1,0,0,0,4.29,7.21l.48.48h0l.91.91A8,8,0,0,0,16.9,19.82l1.39,1.39a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,19.5A6,6,0,0,1,7.11,10l3.4,3.39s0,.05,0,.08A1.5,1.5,0,0,0,12,15h.08l3.39,3.4A6,6,0,0,1,12,19.5Z'
    }));
};

export default McStopwatchSlash;