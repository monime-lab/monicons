import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFlipV = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7.6,15.18A1,1,0,0,0,6.18,16.6l1.06,1.06a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM3.81,9.78,2.75,10.84a.91.91,0,0,0-.19.26,1,1,0,0,0-.27,1.61l1.06,1.06a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L4.41,12l.81-.81A1,1,0,0,0,3.81,9.78ZM8,10.57a1,1,0,0,0-1,1v1.5a1,1,0,0,0,2,0v-1.5A1,1,0,0,0,8,10.57Zm13.71.72-5-5a1,1,0,0,0-1.09-.21A1,1,0,0,0,15,7V17a1,1,0,0,0,.62.92A.84.84,0,0,0,16,18a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM17,14.59V9.41L19.59,12ZM12,2a1,1,0,0,0-1,1V21a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2ZM8.38,6.08a1,1,0,0,0-1.09.21L6.64,7a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.3,1,1,0,0,0,.45-.11A1,1,0,0,0,9,7.57V7A1,1,0,0,0,8.38,6.08Z'
    }));
};

export default McFlipV;