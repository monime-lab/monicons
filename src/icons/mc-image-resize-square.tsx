import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McImageResizeSquare = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M3,8.1a1,1,0,0,0,1-1V6.91a1,1,0,0,0-2,0V7.1A1,1,0,0,0,3,8.1Zm0-4A1,1,0,0,0,3.42,4,1,1,0,0,0,3.1,2H3A1.09,1.09,0,0,0,2,3.1,1,1,0,0,0,3,4.05Zm17.39-.19A1,1,0,0,0,22,3a1,1,0,0,0-1-1h-.1a1,1,0,0,0-.51,1.86ZM11.89,4h.22a1,1,0,0,0,0-2h-.22a1,1,0,0,0,0,2ZM7.39,4H7.6a1,1,0,0,0,0-2H7.39a1,1,0,0,0,0,2ZM21,20a1,1,0,0,0-.42.1A1,1,0,0,0,20.9,22H21a1.09,1.09,0,0,0,1-1.1A1,1,0,0,0,21,20ZM14,11a1,1,0,0,0-1-1H3.27A1.08,1.08,0,0,0,3,10,1,1,0,0,0,2,11V21a1,1,0,0,0,1,1H13.1a1,1,0,0,0,.9-1.42Zm-2,9H5.52l3.91-3.9a.33.33,0,0,1,.47,0L12,18.19Zm0-4.63-.68-.69a2.35,2.35,0,0,0-3.31,0l-4,4V12h8Zm9,0a1,1,0,0,0-1,1v.21a1,1,0,0,0,2,0V16.4A1,1,0,0,0,21,15.4Zm0-9a1,1,0,0,0-1,1V7.6a1,1,0,1,0,2,0V7.39A1,1,0,0,0,21,6.39Zm0,4.5a1,1,0,0,0-1,1v.22a1,1,0,0,0,2,0v-.22A1,1,0,0,0,21,10.89ZM17.1,20h-.2a1,1,0,1,0,0,2h.2a1,1,0,0,0,0-2ZM16.61,4a1,1,0,0,0,0-2H16.4a1,1,0,1,0,0,2Z'
    }));
};

export default McImageResizeSquare;