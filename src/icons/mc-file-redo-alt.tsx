import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileRedoAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14,13a1,1,0,0,0-1-1H8a1,1,0,0,0,0,2h5A1,1,0,0,0,14,13Zm-3,7H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v1a1,1,0,0,0,2,0V9s0,0,0-.06a1.18,1.18,0,0,0-.06-.27l0-.09a.92.92,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0A.86.86,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM20,14a1,1,0,0,0-.91.6A4.07,4.07,0,0,0,17,14a4,4,0,1,0,2.64,7,1,1,0,0,0-1.32-1.51A2,2,0,0,1,17,20a2,2,0,1,1,1-3.75h-.22a1,1,0,0,0,0,2H20a1,1,0,0,0,1-1V15A1,1,0,0,0,20,14ZM8,10H9A1,1,0,0,0,9,8H8a1,1,0,0,0,0,2Zm0,6a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z'
    }));
};

export default McFileRedoAlt;