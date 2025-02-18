import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFolderQuestion = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12.57,16.3a.64.64,0,0,0-.15-.13l-.17-.09L12.06,16a1,1,0,0,0-.9.28,1,1,0,0,0-.22.32,1,1,0,0,0-.07.39,1,1,0,0,0,.29.7,1,1,0,0,0,.32.22,1,1,0,0,0,.39.07,1,1,0,0,0,.38-.07,1,1,0,0,0,.32-.22,1,1,0,0,0,.3-.7,1,1,0,0,0-.08-.39A.87.87,0,0,0,12.57,16.3ZM11.87,9a3,3,0,0,0-2.6,1.5,1,1,0,1,0,1.73,1,1,1,0,0,1,1.87.5,1,1,0,0,1-1,1,1,1,0,1,0,0,2,3,3,0,0,0,0-6ZM19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z'
    }));
};

export default McFolderQuestion;