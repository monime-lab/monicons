import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCommentQuestion = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14.77,5.87a1,1,0,0,0,1.36-.37A1,1,0,0,1,18,6a1,1,0,0,1-1,1,1,1,0,0,0,0,2,3,3,0,1,0-2.6-4.5A1,1,0,0,0,14.77,5.87ZM19.07,13a1,1,0,0,0-1.12.86A7,7,0,0,1,11,20H5.41l.65-.65a1,1,0,0,0,0-1.41A7,7,0,0,1,11,6a1,1,0,0,0,0-2A9,9,0,0,0,4,18.61L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.93-7.87A1,1,0,0,0,19.07,13Zm-1.69-2.93A1,1,0,0,0,16.8,10l-.18.06-.18.09-.15.13a1,1,0,0,0-.21.32A.84.84,0,0,0,16,11a1,1,0,0,0,.07.39,1,1,0,0,0,.22.32A1,1,0,0,0,17,12a1,1,0,0,0,1-1,.84.84,0,0,0-.08-.38,1.07,1.07,0,0,0-.54-.54Z'
    }));
};

export default McCommentQuestion;