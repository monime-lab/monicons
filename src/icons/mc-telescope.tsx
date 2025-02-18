import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McTelescope = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.9,7.59l-1-3.87A3,3,0,0,0,17.19,1.6l-1.93.52a1,1,0,0,0-.71,1.23l.26,1L4.19,7.16a1,1,0,0,0-.71,1.22l.26,1-1,.26a1,1,0,0,0,.25,2,1.09,1.09,0,0,0,.26,0l1-.27.26,1a1,1,0,0,0,.46.6,1,1,0,0,0,.5.14.75.75,0,0,0,.26,0L9,12.08v.42a2.9,2.9,0,0,0,.3,1.28l-5,5a1,1,0,0,0,1.41,1.42l5-5,.28.11V21.5a1,1,0,0,0,2,0V15.32a2.52,2.52,0,0,0,.29-.12l5,5a1,1,0,1,0,1.41-1.42l-5-5A3.09,3.09,0,0,0,15,12.5v-2l1.35-.36.25,1a1,1,0,0,0,1,.74l.26,0,1.93-.52A3,3,0,0,0,21.9,7.59ZM13,12.5a1,1,0,0,1-.28.69h0v0a1,1,0,0,1-.69.28,1,1,0,0,1-.7-.29h0a1,1,0,0,1-.29-.7v-1L13,11ZM6.19,10.76,5.67,8.83l9.66-2.59.26,1,.26,1Zm13.68-1.9a1,1,0,0,1-.61.47l-1,.26-.78-2.9L17,4.76h0l-.26-1,1-.26a1,1,0,0,1,1.23.71l1,3.87A1,1,0,0,1,19.87,8.86Z'
    }));
};

export default McTelescope;