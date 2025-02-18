import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudHeart = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18.42,7.72A7,7,0,0,0,5.06,9.61a4,4,0,0,0-.38,7.66,1.13,1.13,0,0,0,.32.05,1,1,0,0,0,.32-2A2,2,0,0,1,4,13.5a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,1,5.53,1,1,0,1,0,1,1.74A5,5,0,0,0,22,12.5,5,5,0,0,0,18.42,7.72ZM12,12.83a2.94,2.94,0,0,0-3.43.53,2.93,2.93,0,0,0,0,4.13l2.72,2.72a1,1,0,0,0,1.42,0l2.72-2.72a2.93,2.93,0,0,0,0-4.13A2.94,2.94,0,0,0,12,12.83Zm2,3.24-2,2-2-2a.88.88,0,0,1-.27-.65.89.89,0,0,1,.27-.65.92.92,0,0,1,1.3,0,1,1,0,0,0,1.42,0,.94.94,0,0,1,1.3,0,.89.89,0,0,1,.27.65A.88.88,0,0,1,14,16.07Z'
    }));
};

export default McCloudHeart;