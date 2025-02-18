import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McImageBlock = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20.54,2.46A5,5,0,1,0,22,6,5,5,0,0,0,20.54,2.46ZM14,6a3,3,0,0,1,3-3,3,3,0,0,1,1.29.3l-4,4A3,3,0,0,1,14,6Zm5.12,2.12a3.08,3.08,0,0,1-3.4.57l4-4A3,3,0,0,1,20,6,3,3,0,0,1,19.12,8.12ZM19,13a1,1,0,0,0-1,1v.39L16.52,12.9a2.87,2.87,0,0,0-3.93,0l-.7.71L9.41,11.12a2.87,2.87,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6H9A1,1,0,0,0,9,4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,.95-.17l.09,0A3,3,0,0,0,20,19.44a1.43,1.43,0,0,0,0-.22V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.89a.79.79,0,0,1,1.09,0l3.19,3.18h0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.79.79,0,0,1,1.09,0L18,17.21Z'
    }));
};

export default McImageBlock;