import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBandAid = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8.82,11.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42A1,1,0,0,0,8.82,11.29Zm2.47,2.48a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,11.29,13.77Zm9-10A6,6,0,0,0,12,3.55a6,6,0,0,0-8.24.2h0A6,6,0,0,0,3.57,12,6,6,0,0,0,8,22a5.92,5.92,0,0,0,4-1.55,6,6,0,0,0,8.25-.2A6,6,0,0,0,20.43,12,6,6,0,0,0,20.25,3.75ZM18.83,5.17A4,4,0,0,1,19,10.56L13.44,5A4.07,4.07,0,0,1,18.83,5.17ZM5.17,18.83A4,4,0,0,1,5,13.44l5.6,5.6A4.08,4.08,0,0,1,5.17,18.83Zm13.66,0a4.08,4.08,0,0,1-5.64,0l-8-8a4,4,0,0,1,0-5.64h0a4,4,0,0,1,5.64,0l8,8A4,4,0,0,1,18.83,18.83Zm-5.06-7.54a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42A1,1,0,0,0,13.77,11.29ZM11.29,8.82a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41A1,1,0,0,0,11.29,8.82Z'
    }));
};

export default McBandAid;