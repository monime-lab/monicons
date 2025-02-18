import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBlackBerry = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM7.19,13.35H5.27l.52-2.41H7.63c1.2,0,1.48.58,1.48,1.05C9.11,12.64,8.68,13.35,7.19,13.35Zm.66-3.64H5.94L6.46,7.3H8.3c1.19,0,1.47.59,1.47,1C9.77,9,9.35,9.71,7.85,9.71Zm3.75,7.43H9.68l.53-2.42h1.84c1.19,0,1.47.59,1.47,1.06C13.52,16.43,13.1,17.14,11.6,17.14Zm.71-3.79H10.4l.52-2.41h1.84c1.19,0,1.47.58,1.47,1.05C14.23,12.64,13.81,13.35,12.31,13.35ZM13,9.71H11.06l.52-2.41h1.84c1.2,0,1.48.59,1.48,1C14.9,9,14.47,9.71,13,9.71Zm3.74,5.61H14.81l.52-2.42h1.84c1.19,0,1.48.59,1.48,1.06C18.65,14.61,18.22,15.32,16.72,15.32Zm.72-3.44H15.52L16,9.46h1.84c1.2,0,1.48.59,1.48,1C19.36,11.17,18.93,11.88,17.44,11.88Z'
    }));
};

export default McBlackBerry;