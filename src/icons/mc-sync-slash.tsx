import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSyncSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M19.88,15.5h-4.5a1,1,0,0,0,0,2h2.4A8,8,0,0,1,12,20a8.08,8.08,0,0,1-3.12-.63L7.39,20.86A9.83,9.83,0,0,0,12,22a10,10,0,0,0,6.88-2.77V21a1,1,0,0,0,2,0V16.5A1,1,0,0,0,19.88,15.5ZM18.31,7.1h0l1.43-1.43h0l2-2a1,1,0,1,0-1.42-1.42l-2,2A9.89,9.89,0,0,0,12,2,10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1h4.5a1,1,0,0,0,0-2H6.22a7.93,7.93,0,0,1,10.67-.81L5.69,16.89A7.93,7.93,0,0,1,4,12a1,1,0,0,0-2,0,9.89,9.89,0,0,0,2.27,6.32l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2h0l1.43-1.43h0Zm1.06,1.78A8.08,8.08,0,0,1,20,12a1,1,0,0,0,2,0,9.83,9.83,0,0,0-1.14-4.61Z'
    }));
};

export default McSyncSlash;