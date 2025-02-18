import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McDropbox = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.61,11.81,18.36,9.28l3.26-2.56A1,1,0,0,0,22,5.86a1.06,1.06,0,0,0-.5-.8L16.36,2.13a1,1,0,0,0-1.15.12L12,5.05,8.79,2.25a1,1,0,0,0-1.15-.12L2.5,5.06a1.06,1.06,0,0,0-.5.8,1,1,0,0,0,.38.86L5.64,9.28,2.39,11.77a1,1,0,0,0-.39.86,1,1,0,0,0,.5.8l3.41,2v2.47a1,1,0,0,0,.48.85l5.09,3.13a1,1,0,0,0,1,0l5.09-3.13a1,1,0,0,0,.48-.85V15.42l3.41-1.95a1,1,0,0,0,.5-.8A1,1,0,0,0,21.61,11.81ZM16,4.22l3.23,1.84-2.55,2-3-1.84ZM14.91,9.34l-2.91,2-2.91-2L12,7.55ZM4.79,6.06,8,4.22l2.31,2-3,1.84Zm0,6.39,2.5-1.92,3,2.08L8.07,14.34Zm11.29,4.86L12,19.83,7.91,17.31v-.8a1,1,0,0,0,.85-.18L12,13.83l3.24,2.5a1,1,0,0,0,.61.21,1,1,0,0,0,.24,0Zm-.15-3L13.7,12.61l3-2.08,2.51,1.94Z'
    }));
};

export default McDropbox;