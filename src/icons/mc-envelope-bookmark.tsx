import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeBookmark = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,15.26a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.67l5.88,5.89a3,3,0,0,0,2.1.87,3,3,0,0,0,1.43-.36,1,1,0,0,0,.4-1.36,1,1,0,0,0-1.36-.4,1,1,0,0,1-1.15-.17L5.41,8.26H12a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-3A1,1,0,0,0,21,15.26Zm0-12H16a1,1,0,0,0-1,1v8a1,1,0,0,0,1.57.82l1.93-1.29,1.91,1.28a1.06,1.06,0,0,0,.59.19,1,1,0,0,0,.41-.09,1,1,0,0,0,.59-.91v-8A1,1,0,0,0,21,3.26Zm-1,7.12-.94-.63a1,1,0,0,0-1.12,0l-.94.63V5.26h3Z'
    }));
};

export default McEnvelopeBookmark;