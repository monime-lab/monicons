import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McPlane = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.75,12a1,1,0,0,0-.55-.89L15.08,8.05v-4a3.08,3.08,0,1,0-6.16,0v4L2.8,11.11a1,1,0,0,0-.55.89v3.33a1,1,0,0,0,.43.83,1,1,0,0,0,.92.11l5.32-2V18l-1.82.6a1,1,0,0,0-.68.95V22a1,1,0,0,0,.3.71,1,1,0,0,0,.7.29h9.17a1,1,0,0,0,1-1V19.5a1,1,0,0,0-.68-.95L15.08,18V14.28l5.32,2a1,1,0,0,0,.92-.11,1,1,0,0,0,.43-.83Zm-7.31-.1a1,1,0,0,0-.93.11,1,1,0,0,0-.43.82v5.84a1,1,0,0,0,.69.95l1.81.6V21H8.41v-.78l1.81-.6a1,1,0,0,0,.69-.95V12.83a1,1,0,0,0-.43-.82,1,1,0,0,0-.93-.11l-5.31,2V12.62l6.11-3.06a1,1,0,0,0,.56-.89V4.08a1.08,1.08,0,1,1,2.16,0V8.67a1,1,0,0,0,.56.89l6.11,3.06v1.27Z'
    }));
};

export default McPlane;