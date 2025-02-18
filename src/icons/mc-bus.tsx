import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBus = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8.5,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-.33-.21A1,1,0,0,0,8.3,15l-.18.06-.18.09a1.58,1.58,0,0,0-.15.12l-.12.15a.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,1,1Zm8,0a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21l-.12.15a.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7A1,1,0,0,0,16.5,17Zm-3-12h-2a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm5-3H6.5a3,3,0,0,0-3,3V17a3,3,0,0,0,2,2.82V21a1,1,0,0,0,2,0V20h10v1a1,1,0,0,0,2,0V19.82a3,3,0,0,0,2-2.82V5A3,3,0,0,0,18.5,2Zm1,15a1,1,0,0,1-1,1H6.5a1,1,0,0,1-1-1V14h14Zm0-5H5.5V5a1,1,0,0,1,1-1h12a1,1,0,0,1,1,1Z'
    }));
};

export default McBus;