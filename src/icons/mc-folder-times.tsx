import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFolderTimes = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14.71,10.79a1,1,0,0,0-1.42,0L12,12.09l-1.29-1.3a1,1,0,0,0-1.42,1.42l1.3,1.29-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,14.91l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-1.3-1.29,1.3-1.29A1,1,0,0,0,14.71,10.79ZM19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z'
    }));
};

export default McFolderTimes;