import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudSunRain = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7.5,15a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V16A1,1,0,0,0,7.5,15ZM22,7H20.9a5.22,5.22,0,0,0-.73-1.76L21,4.47a1,1,0,1,0-1.42-1.42l-.77.78A5,5,0,0,0,17,3.1V2a1,1,0,0,0-2,0V3.1a5.22,5.22,0,0,0-1.76.73l-.77-.78a1,1,0,0,0-1.42,1.42l.78.77a5.06,5.06,0,0,0-.77,2A5.76,5.76,0,0,0,9.5,7a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,3,15.5,1.5,1.5,0,0,1,4.5,14a1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,15,16.61a1,1,0,0,0,1.1,1.68A4.34,4.34,0,0,0,18,14.67a4.41,4.41,0,0,0-.45-1.92,5.17,5.17,0,0,0,1.21-.58l.77.78A1,1,0,0,0,21,13a1,1,0,0,0,0-1.42l-.78-.77A5,5,0,0,0,20.9,9H22a1,1,0,0,0,0-2Zm-3.87,3.12A3,3,0,0,1,16,11h-.06a4.12,4.12,0,0,0-1-.46,5.93,5.93,0,0,0-2-2.38c0-.06,0-.1,0-.16a3,3,0,0,1,.87-2.12,3.1,3.1,0,0,1,4.25,0,3,3,0,0,1,0,4.25ZM7.5,20a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V21A1,1,0,0,0,7.5,20Zm4-1a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,11.5,19Zm0-5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,11.5,14Z'
    }));
};

export default McCloudSunRain;