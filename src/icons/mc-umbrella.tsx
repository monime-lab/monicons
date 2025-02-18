import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McUmbrella = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,11.24s0,0,0,0a.22.22,0,0,1,0-.08l0-.19c0-.23-.06-.46-.1-.69a.75.75,0,0,1,0-.16c-.05-.25-.12-.49-.19-.73v0a8.91,8.91,0,0,0-5.86-5.87l-.08,0c-.22-.07-.45-.13-.68-.18l-.18,0a5.21,5.21,0,0,0-.55-.08l-.24,0V3a1,1,0,0,0-2,0v.06a8.7,8.7,0,0,0-1,.18,4.71,4.71,0,0,0-.62.16l-.13,0c-.25.08-.48.17-.72.26l0,0A8.93,8.93,0,0,0,3.42,9.28a.31.31,0,0,0,0,.08,6.38,6.38,0,0,0-.19.72l0,.16q-.08.36-.12.75s0,.07,0,.11,0,.06,0,.09,0,0,0,.05c0,.25,0,.5,0,.76a1,1,0,0,0,1,1h7v6a1,1,0,0,1-2,0,1,1,0,0,0-2,0,3,3,0,0,0,6,0V13h7a1,1,0,0,0,1-1C21,11.74,21,11.49,21,11.24ZM8,11H5.08s0-.07,0-.11,0-.28.08-.41,0-.13,0-.19.08-.32.13-.48l0-.08A7,7,0,0,1,9.1,5.64,16.09,16.09,0,0,0,8,11Zm2,0c.19-3.91,1.44-6,2-6s1.79,2.09,2,6Zm6,0A16.09,16.09,0,0,0,14.9,5.64a7,7,0,0,1,3.73,4.12v0a4.61,4.61,0,0,1,.15.53.83.83,0,0,0,0,.15c0,.14.06.29.08.43s0,.07,0,.11Z'
    }));
};

export default McUmbrella;