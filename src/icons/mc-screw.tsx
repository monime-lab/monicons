import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McScrew = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.71,10.12,13.88,2.29a1,1,0,0,0-1.7.57L11.45,8l-2,2-.33-.19A1,1,0,0,0,8,11.44L6.85,12.61l-.33-.19a1,1,0,0,0-1.11,1.63L4.24,15.21,3.92,15a1,1,0,0,0-1.37.37,1,1,0,0,0,.25,1.26l-.51.51a.93.93,0,0,0-.21.33,1,1,0,0,0-.08.38V21a1,1,0,0,0,1,1H6.13a1,1,0,0,0,.38-.08.93.93,0,0,0,.33-.21L8.54,20l.33.19a1,1,0,0,0,1.37-.36A1,1,0,0,0,10,18.56l1.17-1.16.33.19a1,1,0,0,0,.49.13A1,1,0,0,0,12.59,16l1.17-1.16.33.19a1,1,0,0,0,.49.13,1,1,0,0,0,.62-1.77l.79-.79,5.15-.73a1,1,0,0,0,.81-.68A1,1,0,0,0,21.71,10.12ZM5.72,20H4V18.28l.57-.57L6.75,19Zm2.49-2.5L6,16.25l1.14-1.14,2.17,1.25Zm2.61-2.6L8.64,13.64,9.79,12.5,12,13.75Zm2.61-2.61L11.25,11l1.14-1.14,1.72,1.72Zm2.45-1.74L13.45,8.12l.43-3,5,5Z'
    }));
};

export default McScrew;