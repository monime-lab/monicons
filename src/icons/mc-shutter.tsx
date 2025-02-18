import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McShutter = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.07,4.93A10,10,0,1,0,4.93,19.07,10,10,0,1,0,19.07,4.93ZM18.23,7H12.76l2.35-2.35A8.14,8.14,0,0,1,18.23,7ZM9,4.6a8.15,8.15,0,0,1,3.87-.54L9,7.93ZM7,5.77v5.47L5.19,9.43l-.54-.54A8.14,8.14,0,0,1,7,5.77ZM4.6,15a8.12,8.12,0,0,1-.54-3.87L7.93,15Zm1.17,2h5.47L8.89,19.35A8.14,8.14,0,0,1,5.77,17ZM15,19.4a8.13,8.13,0,0,1-3.87.54L15,16.07Zm0-6.16L13.24,15H10.75L9,13.24V10.76L10.76,9h2.48L15,10.76Zm2,5V12.76l2.35,2.35A8.14,8.14,0,0,1,17,18.23ZM16.07,9H19.4a8.13,8.13,0,0,1,.54,3.87Z'
    }));
};

export default McShutter;