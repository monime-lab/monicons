import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McIntercom = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.5,2H4.5A2.5,2.5,0,0,0,2,4.5v15A2.5,2.5,0,0,0,4.5,22h15A2.5,2.5,0,0,0,22,19.5V4.5A2.5,2.5,0,0,0,19.5,2ZM14.67,5.67A.66.66,0,0,1,15.34,5a.68.68,0,0,1,.66.66v8.9a.67.67,0,0,1-1.33,0Zm-3.34-.34A.67.67,0,0,1,12,4.66h0a.67.67,0,0,1,.67.67V15a.67.67,0,0,1-1.34,0ZM8,5.67a.67.67,0,0,1,1.33,0v8.9a.66.66,0,0,1-.67.66A.68.68,0,0,1,8,14.57ZM4.67,7A.67.67,0,0,1,6,7v6a.67.67,0,0,1-.67.66A.67.67,0,0,1,4.67,13ZM19.1,17.17A11.3,11.3,0,0,1,12,19.33a11.3,11.3,0,0,1-7.1-2.16.67.67,0,0,1,.87-1A10.2,10.2,0,0,0,12,18a10.15,10.15,0,0,0,6.23-1.84.67.67,0,0,1,.87,1ZM19.33,13A.67.67,0,0,1,18,13V7a.67.67,0,0,1,.67-.66.66.66,0,0,1,.66.66Z'
    }));
};

export default McIntercom;