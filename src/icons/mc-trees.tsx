import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McTrees = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16.5,5A4.86,4.86,0,0,0,14,5.69,6,6,0,0,0,2.5,8v4a6,6,0,0,0,5,5.91V21a1,1,0,0,0,2,0V17.91a6.08,6.08,0,0,0,2.78-1.26A5,5,0,0,0,15.5,18.9V21a1,1,0,0,0,2,0V18.9a5,5,0,0,0,4-4.9V10A5,5,0,0,0,16.5,5Zm-5,5v4a5.23,5.23,0,0,0,.06.57,4,4,0,0,1-2.06,1.3V13a1,1,0,0,0-2,0v2.86A4,4,0,0,1,4.5,12V8a4,4,0,0,1,6.83-2.84,3.94,3.94,0,0,1,1.06,2A5,5,0,0,0,11.5,10Zm8,4a3,3,0,0,1-2,2.82V13a1,1,0,0,0-2,0v3.82a3,3,0,0,1-2-2.82V10a3,3,0,0,1,6,0Z'
    }));
};

export default McTrees;