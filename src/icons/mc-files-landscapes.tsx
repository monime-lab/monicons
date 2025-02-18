import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFilesLandscapes = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M23,9.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0A.88.88,0,0,0,16.05,3H8A3,3,0,0,0,5,6V7H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V17h1a3,3,0,0,0,3-3V10S23,10,23,9.94ZM17,6.41,19.59,9H18a1,1,0,0,1-1-1ZM17,18a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V10A1,1,0,0,1,4,9H5v5a3,3,0,0,0,3,3h9Zm4-4a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h7V8a3,3,0,0,0,3,3h3Z'
    }));
};

export default McFilesLandscapes;