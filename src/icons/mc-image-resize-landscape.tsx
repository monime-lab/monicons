import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McImageResizeLandscape = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13,11H2a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H12.86c.05,0,.09,0,.14,0a1,1,0,0,0,1-1V12A1,1,0,0,0,13,11ZM7.44,20l1.93-1.93a.3.3,0,0,1,.5,0L11.79,20ZM12,17.38l-.72-.71a2.41,2.41,0,0,0-3.33,0L4.61,20H3V13h9ZM2,4.11a1,1,0,0,0,.86-.49A1.05,1.05,0,0,0,3.05,3,1,1,0,0,0,2,2,1,1,0,0,0,1,3v.1A1,1,0,0,0,2,4.11ZM9.91,4h.19a1,1,0,0,0,0-2H9.91a1,1,0,0,0,0,2ZM2,8.78a1,1,0,0,0,1-1V7.56a1,1,0,1,0-2,0v.22A1,1,0,0,0,2,8.78ZM14.09,2H13.9a1,1,0,0,0,0,2h.19a1,1,0,0,0,0-2ZM5.91,4H6.1a1,1,0,0,0,0-2H5.91a1,1,0,0,0,0,2ZM22,6.4a1,1,0,0,0-1,1v.21a1,1,0,0,0,2,0V7.4A1,1,0,0,0,22,6.4ZM17.12,20h-.24a1,1,0,1,0,0,2h.24a1,1,0,0,0,0-2ZM21.9,2A1,1,0,0,0,21,3a1,1,0,0,0,.1.42A1,1,0,0,0,23,3.11V3A1.09,1.09,0,0,0,21.9,2ZM22,10.9a1,1,0,0,0-1,1v.22a1,1,0,0,0,2,0V11.9A1,1,0,0,0,22,10.9ZM18.09,2H17.9a1,1,0,0,0,0,2h.19a1,1,0,0,0,0-2ZM22,20a.93.93,0,0,0-.44.11A1,1,0,0,0,21,21,1,1,0,0,0,22,22a1.09,1.09,0,0,0,1-1.1A1,1,0,0,0,22,20Zm0-4.56a1,1,0,0,0-1,1v.22a1,1,0,1,0,2,0V16.4A1,1,0,0,0,22,15.4Z'
    }));
};

export default McImageResizeLandscape;