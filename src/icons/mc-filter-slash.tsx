import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFilterSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.22,6H12.66a1,1,0,0,0,0,2h6.56a.78.78,0,0,1,.78.78v.78H16.22a1,1,0,1,0,0,2h2.37l-.7.69a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.88-1.88a2.51,2.51,0,0,0,.54-.8h0l0-.1A2.59,2.59,0,0,0,22,9.82v-1A2.79,2.79,0,0,0,19.22,6ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.14,6.55A2.73,2.73,0,0,0,4,8.78v1a2.65,2.65,0,0,0,.24,1.1l0,.06a2.61,2.61,0,0,0,.54.81l5.41,5.4V21a1,1,0,0,0,.47.85,1,1,0,0,0,.53.15,1,1,0,0,0,.45-.11l3.56-1.78a1,1,0,0,0,.55-.89v-2h0l4.51,4.52a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM6,8.78a.76.76,0,0,1,.5-.72L6.59,8,8.15,9.56H6Zm8.07,7.29a1,1,0,0,0-.29.71V18.6l-1.56.78v-2.6a1,1,0,0,0-.29-.71L7.41,11.56h2.74l4.22,4.22Z'
    }));
};

export default McFilterSlash;