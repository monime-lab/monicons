import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McThunderstormSun = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M11.58,16.5H10.32l.86-1.5a1,1,0,1,0-1.73-1L7.72,17a1,1,0,0,0,.86,1.5H9.85L9,20a1,1,0,0,0,1.74,1l1.73-3a1,1,0,0,0,0-1A1,1,0,0,0,11.58,16.5ZM21,7.5h-.8a4.25,4.25,0,0,0-.52-1.27l.56-.56a1,1,0,0,0-1.41-1.41l-.56.56A4.25,4.25,0,0,0,17,4.3V3.5a1,1,0,0,0-2,0v.8a4.25,4.25,0,0,0-1.27.52l-.56-.56a1,1,0,0,0-1.41,1.41l.56.57c-.09.15-.16.32-.24.48A5.85,5.85,0,0,0,10.5,6.5a6,6,0,0,0-5.94,5.13,3.49,3.49,0,0,0-.34,6.62,1,1,0,1,0,.72-1.86A1.5,1.5,0,0,1,5.5,13.5a1,1,0,0,0,1-1,4,4,0,0,1,7.78-1.29,1,1,0,0,0,.78.67,2.33,2.33,0,0,1,.25,4.53,1,1,0,0,0,.27,2,.84.84,0,0,0,.27,0,4.3,4.3,0,0,0,2.85-5.72l.13.13a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.56-.56A4.25,4.25,0,0,0,20.2,9.5H21a1,1,0,0,0,0-2Zm-3.34,2.65h0a2.28,2.28,0,0,1-.6.41A4.17,4.17,0,0,0,16,10a6.12,6.12,0,0,0-2.09-2.49,2.42,2.42,0,0,1,.46-.7h0a2.43,2.43,0,0,1,3.3,0h0a2.37,2.37,0,0,1,0,3.3Z'
    }));
};

export default McThunderstormSun;