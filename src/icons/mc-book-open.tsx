import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBookOpen = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.17,2.06A13.1,13.1,0,0,0,19,1.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2,13.1,13.1,0,0,0-2.17.19,1,1,0,0,0-.83,1v12a1,1,0,0,0,1.17,1,10.9,10.9,0,0,1,8.25,1.91l.12.07.11,0a.91.91,0,0,0,.7,0l.11,0,.12-.07A10.9,10.9,0,0,1,20.83,16a1,1,0,0,0,1.17-1v-12A1,1,0,0,0,21.17,2.06ZM11,15.35a12.87,12.87,0,0,0-6-1.48c-.33,0-.66,0-1,0v-10a8.69,8.69,0,0,1,1,0,10.86,10.86,0,0,1,6,1.8Zm9-1.44c-.34,0-.67,0-1,0a12.87,12.87,0,0,0-6,1.48V5.67a10.86,10.86,0,0,1,6-1.8,8.69,8.69,0,0,1,1,0Zm1.17,4.15A13.1,13.1,0,0,0,19,17.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2.05,13.1,13.1,0,0,0-2.17.19A1,1,0,0,0,2,19.21,1,1,0,0,0,3.17,20a10.9,10.9,0,0,1,8.25,1.91,1,1,0,0,0,1.16,0A10.9,10.9,0,0,1,20.83,20,1,1,0,0,0,22,19.21,1,1,0,0,0,21.17,18.06Z'
    }));
};

export default McBookOpen;