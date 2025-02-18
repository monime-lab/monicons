import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileLanscapeSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M22,10.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0A.88.88,0,0,0,15.05,4H10.66a1,1,0,0,0,0,2H14V9a3,3,0,0,0,3,3h3v3.34a1,1,0,1,0,2,0V11S22,11,22,10.94ZM17,10a1,1,0,0,1-1-1V7.41L18.59,10ZM3.71,2.29A1,1,0,0,0,2.29,3.71l.91.9A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H18.59l1.7,1.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM5,18a1,1,0,0,1-1-1V7a1,1,0,0,1,.66-.93L16.59,18Z'
    }));
};

export default McFileLanscapeSlash;