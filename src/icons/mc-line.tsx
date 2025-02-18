import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McLine = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.78,9.46h0a.38.38,0,0,0-.38.38v1.67L12,9.65a.4.4,0,0,0-.33-.19h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h0a.38.38,0,0,0,.38-.38V11l1.39,1.91,0,0h0a.27.27,0,0,0,.15.11.32.32,0,0,0,.14,0h0A.33.33,0,0,0,14,13l.1-.07h0a.39.39,0,0,0,.11-.27V9.84A.38.38,0,0,0,13.78,9.46ZM9.2,12.27H8.14V9.84a.38.38,0,0,0-.38-.38h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38H9.2a.39.39,0,0,0,.39-.38v0A.39.39,0,0,0,9.2,12.27Zm1.11-2.81h0a.39.39,0,0,0-.39.38v2.84a.39.39,0,0,0,.39.38h0a.38.38,0,0,0,.38-.38V9.84A.38.38,0,0,0,10.31,9.46ZM17.91,2H6.09A4.1,4.1,0,0,0,2,6.09V17.91A4.1,4.1,0,0,0,6.09,22H17.91A4.1,4.1,0,0,0,22,17.91V6.09A4.1,4.1,0,0,0,17.91,2Zm.31,12.28a1.55,1.55,0,0,1-.13.17h0a5.5,5.5,0,0,1-.8.8c-2,1.87-5.36,4.11-5.81,3.76s.64-1.76-.53-2a1,1,0,0,1-.25,0h0c-3.44-.48-6-2.89-6-5.78,0-3.25,3.29-5.88,7.34-5.88s7.34,2.63,7.34,5.88A5,5,0,0,1,18.22,14.28ZM16.51,9.47H15a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h1.48a.38.38,0,0,0,.38-.38v0a.38.38,0,0,0-.38-.38H15.45v-.6h1.06a.39.39,0,0,0,.38-.39v0a.38.38,0,0,0-.38-.38H15.45v-.61h1.06a.38.38,0,0,0,.38-.38v0A.38.38,0,0,0,16.51,9.47Z'
    }));
};

export default McLine;