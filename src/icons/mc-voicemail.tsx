import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McVoicemail = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18,8a4,4,0,0,0-4,4,3.91,3.91,0,0,0,.56,2H9.44A3.91,3.91,0,0,0,10,12a4,4,0,1,0-4,4H18a4,4,0,0,0,0-8ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,0a2,2,0,1,1,2-2A2,2,0,0,1,18,14Z'
    }));
};

export default McVoicemail;