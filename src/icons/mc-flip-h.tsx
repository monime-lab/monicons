import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFlipH = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,11H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM10.93,9h1.5a1,1,0,0,0,0-2h-1.5a1,1,0,0,0,0,2Zm4.5-1a1,1,0,0,0,1,1H17a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09l-.66-.65a1,1,0,0,0-1.41,0,1,1,0,0,0-.19,1.15A1.49,1.49,0,0,0,15.43,8ZM11.65,4.77,12,4.41l.81.81a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L13.16,2.75a.91.91,0,0,0-.26-.19,1,1,0,0,0-1.61-.27L10.23,3.35a1,1,0,0,0,1.42,1.42ZM17,15H7a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l5,5a1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-1.09A1,1,0,0,0,17,15Zm-5,4.59L9.41,17h5.18ZM7.05,9a1,1,0,0,0,.71-.29L8.82,7.6A1,1,0,0,0,7.4,6.18L6.34,7.24a1,1,0,0,0,0,1.42A1,1,0,0,0,7.05,9Z'
    }));
};

export default McFlipH;