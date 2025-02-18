import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McKayak = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.12,16.88a3,3,0,0,0-3.4-.58l-1.15-1.14A24,24,0,0,0,21.78,6.3,3.19,3.19,0,0,0,17.7,2.22,24,24,0,0,0,8.84,7.43L7.7,6.28a3,3,0,1,0-4.82.84A3,3,0,0,0,5,8a3,3,0,0,0,1.28-.3L7.43,8.84A24,24,0,0,0,2.22,17.7,3.24,3.24,0,0,0,3,21,3.17,3.17,0,0,0,5.22,22a3.74,3.74,0,0,0,1.08-.17,24,24,0,0,0,8.86-5.21l1.14,1.15a3,3,0,1,0,4.82-.84ZM5.71,5.7h0A1,1,0,0,1,4.29,4.29,1,1,0,0,1,5.71,5.7Zm12.6-1.57a1.6,1.6,0,0,1,.47-.08,1.16,1.16,0,0,1,.83.34,1.23,1.23,0,0,1,.26,1.3,22.09,22.09,0,0,1-2.13,4.64L13.67,6.26A22.09,22.09,0,0,1,18.31,4.13ZM5.69,19.87a1.2,1.2,0,0,1-1.56-1.56,22.09,22.09,0,0,1,2.13-4.64l4.07,4.07A22.09,22.09,0,0,1,5.69,19.87ZM12,16.59,7.41,12a21.29,21.29,0,0,1,1.43-1.74l4.91,4.91A21.29,21.29,0,0,1,12,16.59Zm3.15-2.84L10.25,8.84A21.29,21.29,0,0,1,12,7.41l4.6,4.6A21.29,21.29,0,0,1,15.16,13.75Zm4.55,6a1,1,0,1,1-1.42-1.41h0a1,1,0,0,1,1.41,0A1,1,0,0,1,19.71,19.71Z'
    }));
};

export default McKayak;