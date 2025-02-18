import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McPicture = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20,4a1,1,0,0,0,.71-1.7,1,1,0,0,0-1.42,0,1,1,0,0,0-.21.32A.84.84,0,0,0,19,3a1,1,0,0,0,1,1Zm0,9a1,1,0,0,0-1,1v.39l-1.48-1.48a2.77,2.77,0,0,0-3.93,0l-.7.7-2.48-2.49a2.86,2.86,0,0,0-3.93,0L5,12.6V7A1,1,0,0,1,6,6H16a1,1,0,0,0,0-2H6A3,3,0,0,0,3,7V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V14A1,1,0,0,0,20,13ZM6,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L16.45,20Zm13-1a1,1,0,0,1-.18.53L14.31,15l.7-.7a.78.78,0,0,1,1.1,0L19,17.22ZM20,5a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V6A1,1,0,0,0,20,5Z'
    }));
};

export default McPicture;