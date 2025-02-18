import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McJackhammer = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18.85,15.69a1,1,0,0,0-1.41,0l-2.06,2.06a1,1,0,0,0,.45,1.67l.26.07-.8.8a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,.26-1,1,1,0,0,0-.71-.71L18,17.94l.83-.84A1,1,0,0,0,18.85,15.69ZM7.91,19.49l.26-.07a1,1,0,0,0,.45-1.67L6.56,15.69A1,1,0,0,0,5.15,17.1l.83.84L5.72,18a1,1,0,0,0-.71.71,1,1,0,0,0,.26,1l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,4a1,1,0,0,0-1,1H17a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5H4A1,1,0,0,0,2,5V7A1,1,0,0,0,4,7H7V9a3,3,0,0,0,2,2.83V13a2,2,0,0,0,2,2v6a1,1,0,0,0,2,0V15a2,2,0,0,0,2-2V11.83A3,3,0,0,0,17,9V7h3a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4ZM15,9a1,1,0,0,1-1,1,1,1,0,0,0-1,1v2H11V11a1,1,0,0,0-1-1A1,1,0,0,1,9,9V5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1ZM12,6a1,1,0,0,0-1,1V8a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Z'
    }));
};

export default McJackhammer;