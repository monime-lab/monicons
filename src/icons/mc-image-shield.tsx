import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McImageShield = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M22.13,2.36a1,1,0,0,0-.84-.2,2.7,2.7,0,0,1-2.2-.47,1,1,0,0,0-1.18,0,2.7,2.7,0,0,1-2.2.47,1,1,0,0,0-.84.2,1,1,0,0,0-.37.78V6.45a4.63,4.63,0,0,0,1.84,3.7l1.57,1.16a1,1,0,0,0,1.18,0l1.57-1.16a4.63,4.63,0,0,0,1.84-3.7V3.14A1,1,0,0,0,22.13,2.36ZM20.5,6.45a2.62,2.62,0,0,1-1,2.09l-1,.72-1-.72a2.62,2.62,0,0,1-1-2.09V4.22a4.81,4.81,0,0,0,2-.54,4.81,4.81,0,0,0,2,.54Zm-2,7.05a1,1,0,0,0-1,1v.39L16,13.41a2.77,2.77,0,0,0-3.93,0l-.7.7L8.91,11.62a2.85,2.85,0,0,0-3.93,0L3.5,13.1V7.5a1,1,0,0,1,1-1h7a1,1,0,0,0,0-2h-7a3,3,0,0,0-3,3v12a3,3,0,0,0,3,3h12a3,3,0,0,0,3-3v-5A1,1,0,0,0,18.5,13.5Zm-14,7a1,1,0,0,1-1-1V15.93L6.4,13a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15,20.5Zm13-1a1,1,0,0,1-.18.53l-4.51-4.51.7-.7a.78.78,0,0,1,1.1,0l2.89,2.9Z'
    }));
};

export default McImageShield;