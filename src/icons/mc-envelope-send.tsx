import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeSend = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16,10.5H8a3,3,0,0,0-3,3v5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3v-5A3,3,0,0,0,16,10.5Zm-.42,2L12.7,15.38a1,1,0,0,1-1.4,0L8.42,12.5Zm1.42,6a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V13.91l2.88,2.87a2.94,2.94,0,0,0,2.12.89,3,3,0,0,0,2.12-.88L17,13.91ZM9,6.5h3.59l-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-2-2a1,1,0,0,0-1.42,1.42l.3.29H9a1,1,0,0,0,0,2Z'
    }));
};

export default McEnvelopeSend;