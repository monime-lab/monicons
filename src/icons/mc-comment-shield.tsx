import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCommentShield = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.7,2.86a1,1,0,0,0-.84-.2,3,3,0,0,1-2.33-.48,1,1,0,0,0-1.15,0,3,3,0,0,1-2.33.48,1,1,0,0,0-.84.2,1,1,0,0,0-.37.77V7a4.56,4.56,0,0,0,1.91,3.7l1.62,1.16a1,1,0,0,0,1.17,0l1.62-1.16A4.56,4.56,0,0,0,22.07,7V3.63A1,1,0,0,0,21.7,2.86ZM20.07,7A2.57,2.57,0,0,1,19,9l-1,.74L16.91,9A2.57,2.57,0,0,1,15.84,7V4.72A5.17,5.17,0,0,0,18,4.17a5.12,5.12,0,0,0,2.11.55ZM18.93,14a1,1,0,0,0-1.21.72A7,7,0,0,1,10.93,20H5.35L6,19.37A1,1,0,0,0,6,18,7,7,0,0,1,10.93,6a1,1,0,0,0,0-2,9,9,0,0,0-7,14.62L2.23,20.29A1,1,0,0,0,2.93,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,18.93,14Z'
    }));
};

export default McCommentShield;