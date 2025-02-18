import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McLayersSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20.49,13.94l-.34.2a1,1,0,0,0-.35,1.37,1,1,0,0,0,.86.49,1,1,0,0,0,.51-.14l.34-.2a1,1,0,0,0-1-1.72ZM11.65,6.36,12,6.15l7,4-1.76,1a1,1,0,0,0,.5,1.87,1,1,0,0,0,.5-.13l3.26-1.89a1,1,0,0,0,0-1.74l-9-5.19a1,1,0,0,0-1,0l-.85.49a1,1,0,0,0,1,1.74ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.93,7.34l-3.43,2a1,1,0,0,0,0,1.74l9,5.2a1.09,1.09,0,0,0,.5.13,1.13,1.13,0,0,0,.5-.13L14,15.4l1.45,1.46-3.44,2L3.5,13.93a1,1,0,0,0-1,1.74l9,5.2a1,1,0,0,0,1,0l4.41-2.55,3.38,3.39a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm8.29,12L5,10.19,7.4,8.81l5.12,5.13Z'
    }));
};

export default McLayersSlash;