import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McUsdCircle = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'
    }));
};

export default McUsdCircle;