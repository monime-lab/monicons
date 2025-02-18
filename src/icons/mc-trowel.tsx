import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McTrowel = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.12,2.88a3.08,3.08,0,0,0-4.24,0L14.46,5.29a3,3,0,0,0-.57,3.41l-2.15,2.15-2-2a3,3,0,0,0-5,1.17l-2.66,8a3,3,0,0,0,.72,3.07A3,3,0,0,0,5,22a2.87,2.87,0,0,0,1-.16l8-2.66a3,3,0,0,0,1.17-5l-2-2,2.15-2.15a3,3,0,0,0,3.41-.57l2.41-2.42A3,3,0,0,0,21.12,2.88ZM13.7,15.63a1,1,0,0,1-.4,1.65L5.32,20a1,1,0,0,1-1-.25,1,1,0,0,1-.25-1l2.67-8A1,1,0,0,1,7.44,10a1.07,1.07,0,0,1,.23,0,1,1,0,0,1,.7.29l2,2-.87.86a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.86-.87Zm6-9.92L17.29,8.12a1,1,0,0,1-1.7-.71,1,1,0,0,1,.29-.7l2.41-2.42a1,1,0,0,1,1.42,0A1,1,0,0,1,19.71,5.71Z'
    }));
};

export default McTrowel;