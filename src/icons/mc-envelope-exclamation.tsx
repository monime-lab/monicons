import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeExclamation = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,13.5a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.91l5.88,5.88a3,3,0,0,0,4.24,0l3.59-3.58a1,1,0,0,0-1.42-1.42l-3.58,3.59a1,1,0,0,1-1.42,0L5.41,7.5H17a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-4A1,1,0,0,0,21,13.5Zm0-11a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0v-4A1,1,0,0,0,21,2.5Zm-.2,7a.64.64,0,0,0-.18.06.76.76,0,0,0-.18.09l-.15.12a1.05,1.05,0,0,0-.29.71,1.23,1.23,0,0,0,0,.19.6.6,0,0,0,.06.19.76.76,0,0,0,.09.18,1.58,1.58,0,0,0,.12.15,1,1,0,0,0,1.42,0l.12-.15a.76.76,0,0,0,.09-.18.6.6,0,0,0,.06-.19,1.23,1.23,0,0,0,0-.19,1,1,0,0,0-1.2-1Z'
    }));
};

export default McEnvelopeExclamation;