import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBagSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19,6H16V5a2,2,0,0,0-2-2H10a1.86,1.86,0,0,0-.61.1,1,1,0,0,0-.64,1.27A1,1,0,0,0,10,5h4V6H12.66a1,1,0,0,0,0,2H19a1,1,0,0,1,1,1v1.28l-2.57.86a1,1,0,0,0-.63,1.27,1,1,0,0,0,.95.68,1.19,1.19,0,0,0,.32-.05L20,12.39v2.95a1,1,0,1,0,2,0V9A3,3,0,0,0,19,6ZM3.71,2.29A1,1,0,0,0,2.29,3.71L4.62,6A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3.07,3.07,0,0,0,.53-.06l.76.77a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM4,9A1,1,0,0,1,5,8H6.59l4,4H9.16L4,10.28ZM5,19a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h3.59l5,5Z'
    }));
};

export default McBagSlash;