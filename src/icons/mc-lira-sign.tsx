import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McLiraSign = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18,12a1,1,0,0,0-1,1,7.00787,7.00787,0,0,1-7,7V11.13538l5.2168-1.15931a.99986.99986,0,0,0-.4336-1.95214L10,9.08685V7.13538l5.2168-1.15931a.99986.99986,0,1,0-.4336-1.95214L10,5.08685V3A1,1,0,0,0,8,3V5.53131l-2.2168.49262a.99986.99986,0,1,0,.4336,1.95214L8,7.57983V9.53131l-2.2168.49262a.99986.99986,0,1,0,.4336,1.95214L8,11.57983V21a1,1,0,0,0,1,1h1a9.01047,9.01047,0,0,0,9-9A1,1,0,0,0,18,12Z'
    }));
};

export default McLiraSign;