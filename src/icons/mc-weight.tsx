import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McWeight = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19,4H17.55A3.08,3.08,0,0,0,17,3a3,3,0,0,0-2.25-1H9.27A3,3,0,0,0,7,3a3.08,3.08,0,0,0-.57,1H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM8.52,4.34A1,1,0,0,1,9.27,4h5.46a1,1,0,0,1,.75.34,1,1,0,0,1,.25.78l-.5,4a1,1,0,0,1-1,.88H12.59l1.14-2.4a1,1,0,0,0-1.8-.86L10.37,10h-.6a1,1,0,0,1-1-.88l-.5-4A1,1,0,0,1,8.52,4.34ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7A1,1,0,0,1,5,6H6.37l.42,3.37a3,3,0,0,0,3,2.63h4.46a3,3,0,0,0,3-2.63L17.63,6H19a1,1,0,0,1,1,1Zm-6-3H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z'
    }));
};

export default McWeight;