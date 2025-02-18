import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCreativeCommonsPd = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-8-8A7.92,7.92,0,0,1,5.69,7.1L8.05,9.47A3.07,3.07,0,0,0,8,10v4a3,3,0,0,0,3,3h2a3,3,0,0,0,1.89-.69l2,2A7.92,7.92,0,0,1,12,20Zm-2-6V11.41l3.46,3.46A.91.91,0,0,1,13,15H11A1,1,0,0,1,10,14Zm8.31,2.9L16,14.53A3.07,3.07,0,0,0,16,14a1,1,0,0,0-1-1,.91.91,0,0,0-.46.13l-4-4A.91.91,0,0,1,11,9h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H11a3,3,0,0,0-1.89.69l-2-2A7.92,7.92,0,0,1,12,4a8,8,0,0,1,8,8A7.92,7.92,0,0,1,18.31,16.9Z'
    }));
};

export default McCreativeCommonsPd;