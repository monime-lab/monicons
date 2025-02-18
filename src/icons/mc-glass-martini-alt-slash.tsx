import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McGlassMartiniAltSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.71,16.29l-14-14A1,1,0,0,0,4.29,3.71L6.59,6H5a1,1,0,0,0-.9.57,1,1,0,0,0,.12,1L11,16.1V20H6.75a1,1,0,0,0,0,2h10.5a1,1,0,0,0,0-2H13V16.1l1.64-2,3.65,3.65a1,1,0,0,0,1.42,0A1,1,0,0,0,19.71,16.29ZM7.08,8H8.59l1.89,1.89H8.59ZM12,14.15l-1.81-2.26h2.29l.74.74ZM14.66,8h2.26l-.63.79a1,1,0,0,0,.15,1.4,1,1,0,0,0,.63.22,1,1,0,0,0,.78-.37l1.93-2.42a1,1,0,0,0,.12-1A1,1,0,0,0,19,6H14.66a1,1,0,0,0,0,2Z'
    }));
};

export default McGlassMartiniAltSlash;