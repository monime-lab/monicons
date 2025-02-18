import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSubwayAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M15,17h1a1,1,0,0,0,0-2H15a1,1,0,0,0,0,2Zm6,0V9a3,3,0,0,0-3-3H13V4h4a1,1,0,0,0,0-2H7A1,1,0,0,0,7,4h4V6H6A3,3,0,0,0,3,9v8a3,3,0,0,0,1.2,2.39l-.91.9a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L6.41,20H17.59l1.7,1.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.91-.9A3,3,0,0,0,21,17ZM5,9A1,1,0,0,1,6,8h5v4H5Zm14,8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14H19Zm0-5H13V8h5a1,1,0,0,1,1,1ZM8,17H9a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z'
    }));
};

export default McSubwayAlt;