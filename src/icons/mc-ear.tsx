import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEar = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,8a1.00067,1.00067,0,0,1,1,1,1,1,0,0,0,2,0,2.9995,2.9995,0,1,0-5.01758,2.2207c.01.0091.16113.16992.19336.21485a.9875.9875,0,0,1,0,1.11914.99952.99952,0,1,0,1.64844,1.13086,2.98332,2.98332,0,0,0-.00488-3.38867,7.12392,7.12392,0,0,0-.49122-.55665,1.05523,1.05523,0,0,1-.1582-.18164A1.00072,1.00072,0,0,1,12,8Zm0-6a7.0006,7.0006,0,0,0-6.76172,8.81152A.99989.99989,0,0,0,7.16992,10.294,5.00018,5.00018,0,1,1,17,9a5.11412,5.11412,0,0,1-.70508,2.56738L12.73145,19A2.00462,2.00462,0,0,1,11,20a2.027,2.027,0,0,1-2-2,1.99224,1.99224,0,0,1,.26855-.999,1.00065,1.00065,0,0,0-1.73242-1.002,3.9988,3.9988,0,1,0,6.96289,3.9336L18.0625,12.5A7.00044,7.00044,0,0,0,12,2Z'
    }));
};

export default McEar;