import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McVolumeMute = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.91,12l1.8-1.79a1,1,0,0,0-1.42-1.42l-1.79,1.8-1.79-1.8a1,1,0,0,0-1.42,1.42L17.09,12l-1.8,1.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.79-1.8,1.79,1.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
    }));
};

export default McVolumeMute;