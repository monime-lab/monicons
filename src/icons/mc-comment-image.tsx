import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCommentImage = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,2A10,10,0,0,0,2.44,14.91a.29.29,0,0,0,0,.1,9.83,9.83,0,0,0,1.79,3.32l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9a10,10,0,0,0,9.46-6.78l0-.08A9.89,9.89,0,0,0,22,12,10,10,0,0,0,12,2Zm0,18H5.41l.3-.29,8.41-8.42a1,1,0,0,1,1.4,0l3.62,3.6.23.22A8,8,0,0,1,12,20ZM4.54,14.87l1.58-1.58a1,1,0,0,1,1.41,0l.87.87L5.68,16.9A7.67,7.67,0,0,1,4.54,14.87Zm15.41-2-3-3a3,3,0,0,0-4.24,0L9.82,12.76l-.88-.87a3,3,0,0,0-4.23,0L4,12.56A5.25,5.25,0,0,1,4,12a8,8,0,0,1,16,0A8.27,8.27,0,0,1,20,12.86Z'
    }));
};

export default McCommentImage;