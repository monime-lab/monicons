import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFolderDownload = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.29,13.79l-.29.3V11.5a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2a1,1,0,0,0-1.42-1.42ZM19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z'
    }));
};

export default McFolderDownload;