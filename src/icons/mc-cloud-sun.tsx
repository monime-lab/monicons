import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudSun = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,9h-.8a4.25,4.25,0,0,0-.52-1.27l.56-.56a1,1,0,0,0-1.41-1.41l-.56.56A4.25,4.25,0,0,0,17,5.8V5a1,1,0,0,0-2,0v.8a4.1,4.1,0,0,0-1.26.52l-.57-.56a1,1,0,0,0-1.41,1.41l.56.57c-.09.15-.16.32-.24.48A5.85,5.85,0,0,0,10.5,8a6,6,0,0,0-5.94,5.13A3.5,3.5,0,0,0,5.5,20h9.17A4.33,4.33,0,0,0,19,15.67a4.19,4.19,0,0,0-.3-1.55l.13.12a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.56-.56A4.25,4.25,0,0,0,20.2,11H21a1,1,0,0,0,0-2Zm-6.33,9H5.5a1.5,1.5,0,0,1,0-3,1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67A2.33,2.33,0,0,1,14.67,18Zm3-6.35h0a2.17,2.17,0,0,1-.6.4A4.49,4.49,0,0,0,16,11.54a6.12,6.12,0,0,0-2.09-2.49,2.25,2.25,0,0,1,.46-.69h0a2.42,2.42,0,0,1,3.29,0h0a2.37,2.37,0,0,1,0,3.3Z'
    }));
};

export default McCloudSun;