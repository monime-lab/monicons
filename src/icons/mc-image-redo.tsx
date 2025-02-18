import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McImageRedo = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.5,1.5a1,1,0,0,0-1,1h0a5,5,0,1,0,.3,7.75,1,1,0,0,0-1.32-1.51,3,3,0,1,1,.25-4.25H18.5a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1v-3A1,1,0,0,0,21.5,1.5Zm-3,12a1,1,0,0,0-1,1v.39L16,13.41a2.77,2.77,0,0,0-3.93,0l-.7.7L8.91,11.62a2.79,2.79,0,0,0-3.93,0L3.5,13.1V7.5a1,1,0,0,1,1-1h5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3v12a3,3,0,0,0,3,3h12a3,3,0,0,0,3-3v-5A1,1,0,0,0,18.5,13.5Zm-14,7a1,1,0,0,1-1-1V15.93L6.4,13a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15,20.5Zm13-1a1,1,0,0,1-.18.53l-4.51-4.51.7-.7a.78.78,0,0,1,1.1,0l2.89,2.9Z'
    }));
};

export default McImageRedo;