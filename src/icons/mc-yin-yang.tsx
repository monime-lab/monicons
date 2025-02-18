import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McYinYang = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,15.5a1,1,0,1,0,1,1A1,1,0,0,0,12,15.5ZM12,2a5.54514,5.54514,0,0,0-.56165.0285A9.99347,9.99347,0,0,0,12,22a5.54514,5.54514,0,0,0,.56165-.0285A9.99347,9.99347,0,0,0,12,2Zm0,18A7.98889,7.98889,0,0,1,6.70935,6.01538,5.48381,5.48381,0,0,0,12,13a3.5,3.5,0,0,1,0,7Zm5.29065-2.01538A5.48381,5.48381,0,0,0,12,11a3.5,3.5,0,0,1,0-7,7.98889,7.98889,0,0,1,5.29065,13.98462ZM12,6.5a1,1,0,1,0,1,1A1,1,0,0,0,12,6.5Z'
    }));
};

export default McYinYang;