import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCommentAltShield = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M6.57,12a1,1,0,0,0,.58-.19l1.62-1.16A4.56,4.56,0,0,0,10.68,7V3.63a1,1,0,0,0-.37-.77,1,1,0,0,0-.84-.2,3,3,0,0,1-2.33-.48A1,1,0,0,0,6,2.18a3,3,0,0,1-2.33.48,1,1,0,0,0-1.2,1V7a4.55,4.55,0,0,0,1.9,3.7L6,11.81A.94.94,0,0,0,6.57,12ZM4.46,7V4.72a5.16,5.16,0,0,0,2.11-.55,5.12,5.12,0,0,0,2.11.55V7A2.57,2.57,0,0,1,7.61,9l-1,.74L5.53,9A2.57,2.57,0,0,1,4.46,7ZM18.54,6h-5a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v9.72L18,17.27a.94.94,0,0,0-.68-.27H8.54a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3H16.9l3,2.73a1,1,0,0,0,.67.27,1.15,1.15,0,0,0,.41-.08,1,1,0,0,0,.59-.92V9A3,3,0,0,0,18.54,6Z'
    }));
};

export default McCommentAltShield;