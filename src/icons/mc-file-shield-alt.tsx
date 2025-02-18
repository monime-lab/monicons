import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileShieldAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10.5,20h-5a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0L11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2Zm2-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,8a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm13.63,5.86a1,1,0,0,0-.84-.2,2.77,2.77,0,0,1-2.2-.47,1,1,0,0,0-1.18,0,2.78,2.78,0,0,1-2.2.47,1,1,0,0,0-1.21,1V17a4.6,4.6,0,0,0,1.84,3.69L16.9,21.8a1,1,0,0,0,1.2,0l1.56-1.16A4.6,4.6,0,0,0,21.5,17V14.63A1,1,0,0,0,21.13,13.86ZM19.5,17a2.62,2.62,0,0,1-1,2.09l-1,.72-1-.72a2.62,2.62,0,0,1-1-2.09V15.72a4.68,4.68,0,0,0,2-.55,4.68,4.68,0,0,0,2,.55Zm-9-.95h-3a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm1-4h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z'
    }));
};

export default McFileShieldAlt;