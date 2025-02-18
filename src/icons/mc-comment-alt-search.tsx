import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCommentAltSearch = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19,6H14a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H9a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,21,22a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,22,21V9A3,3,0,0,0,19,6ZM8.57,10l1.72,1.73a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L10,8.57a4.37,4.37,0,0,0,.65-2.26A4.32,4.32,0,1,0,2,6.31a4.32,4.32,0,0,0,4.31,4.32A4.35,4.35,0,0,0,8.57,10ZM4,6.31a2.29,2.29,0,0,1,.68-1.63A2.32,2.32,0,0,1,8,4.68,2.31,2.31,0,0,1,8,8,2.32,2.32,0,0,1,4,6.31Z'
    }));
};

export default McCommentAltSearch;