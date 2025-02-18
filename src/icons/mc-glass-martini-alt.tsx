import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McGlassMartiniAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.78,3.62a1,1,0,0,0,.12-1.05A1,1,0,0,0,21,2H3a1,1,0,0,0-.9.57,1,1,0,0,0,.12,1.05L11,14.6V20H5.25a1,1,0,0,0,0,2h13.5a1,1,0,0,0,0-2H13V14.6ZM5.08,4H18.92l-2.4,3h-9ZM12,12.65,9.08,9h5.84Z'
    }));
};

export default McGlassMartiniAlt;