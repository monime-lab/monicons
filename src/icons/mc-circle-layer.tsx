import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCircleLayer = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M15,2A7,7,0,0,0,8.12,7.74,6,6,0,0,0,5,12.41,5,5,0,1,0,11.59,19a6,6,0,0,0,4.67-3.09A7,7,0,0,0,15,2ZM10,17.43c0,.1,0,.2-.07.31h0a3,3,0,1,1-3.64-3.64h0L6.57,14A2.94,2.94,0,0,1,10,17.43Zm5-3.67a1.8,1.8,0,0,1-.05.19,3.74,3.74,0,0,1-.17.54,4,4,0,0,1-2.7,2.4c0-.18,0-.35-.06-.53s0-.27,0-.4-.12-.38-.18-.57-.07-.24-.12-.36a4.21,4.21,0,0,0-.3-.55c0-.09-.09-.19-.15-.28a5.3,5.3,0,0,0-.6-.73l-.2-.17a5.52,5.52,0,0,0-.53-.43,2.9,2.9,0,0,0-.34-.19,4,4,0,0,0-.5-.27,2.34,2.34,0,0,0-.4-.13,3.13,3.13,0,0,0-.52-.16c-.14,0-.29,0-.44-.06L7.13,12A4,4,0,0,1,9.52,9.3a3.27,3.27,0,0,1,.53-.17l.2-.05A3.74,3.74,0,0,1,11,9a4,4,0,0,1,4,4A3.84,3.84,0,0,1,14.92,13.76Zm2-.16q0-.3,0-.6a6,6,0,0,0-6-6q-.3,0-.6,0A5,5,0,1,1,17,13.6Z'
    }));
};

export default McCircleLayer;