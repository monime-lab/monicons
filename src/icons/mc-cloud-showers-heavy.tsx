import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudShowersHeavy = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12.89,18.06a1,1,0,0,0-1.28.6l-.73,2a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l.73-2A1,1,0,0,0,12.89,18.06Zm-4,0a1,1,0,0,0-1.28.6l-.73,2a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l.73-2A1,1,0,0,0,8.89,18.06Zm0-7a1,1,0,0,0-1.28.6l-1.1,3A1,1,0,0,0,7.45,16a1,1,0,0,0,.94-.66l1.1-3A1,1,0,0,0,8.89,11.06Zm4,0a1,1,0,0,0-1.28.6l-1.1,3A1,1,0,0,0,11.45,16a1,1,0,0,0,.94-.66l1.1-3A1,1,0,0,0,12.89,11.06Zm5.53-4.84A7,7,0,0,0,5.06,8.11,4,4,0,0,0,2,12a4,4,0,0,0,1.34,3,1,1,0,1,0,1.32-1.5A2,2,0,0,1,4,12a2,2,0,0,1,2-2A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67A3,3,0,0,1,20,11a2.91,2.91,0,0,1-.74,2,1,1,0,0,0,1.48,1.34,5,5,0,0,0-2.32-8.08ZM16.89,18.06a1,1,0,0,0-1.28.6l-.73,2a1,1,0,0,0,.6,1.28,1,1,0,0,0,.34.06,1,1,0,0,0,.94-.66l.73-2A1,1,0,0,0,16.89,18.06Zm0-7a1,1,0,0,0-1.28.6l-1.1,3A1,1,0,0,0,15.45,16a1,1,0,0,0,.94-.66l1.1-3A1,1,0,0,0,16.89,11.06Z'
    }));
};

export default McCloudShowersHeavy;