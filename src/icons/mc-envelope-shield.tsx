import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeShield = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.63,5.12a1,1,0,0,0-.84-.2,2.74,2.74,0,0,1-2.2-.46,1,1,0,0,0-1.18,0,2.74,2.74,0,0,1-2.2.46A1,1,0,0,0,14,5.9V9.21a4.62,4.62,0,0,0,1.84,3.7l1.57,1.16a1,1,0,0,0,1.18,0l1.57-1.16A4.62,4.62,0,0,0,22,9.21V5.9A1,1,0,0,0,21.63,5.12ZM20,9.21a2.61,2.61,0,0,1-1,2.09L18,12l-1-.72a2.61,2.61,0,0,1-1-2.09V7a4.67,4.67,0,0,0,2-.54A4.67,4.67,0,0,0,20,7Zm1,6a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.67l5.88,5.88a3,3,0,0,0,2.11.88,3,3,0,0,0,2.15-.9l-.7-.71-.74-.68a1,1,0,0,1-1.4,0L5.41,8.26H11a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-3A1,1,0,0,0,21,15.26Z'
    }));
};

export default McEnvelopeShield;