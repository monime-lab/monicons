import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McClosedCaptioningSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-8-8A7.92,7.92,0,0,1,5.69,7.1L7.2,8.61A3,3,0,0,0,6,11v2a3,3,0,0,0,5.59,1.5,1,1,0,1,0-1.72-1,1,1,0,0,1-1.58.19A.93.93,0,0,1,8,13V11a1,1,0,0,1,.67-.92L12,13.46A3,3,0,0,0,14.54,16l2.36,2.36A7.92,7.92,0,0,1,12,20Zm6.31-3.1-1.52-1.52a2.94,2.94,0,0,0,.8-.88,1,1,0,1,0-1.72-1,1,1,0,0,1-.55.41L14,12.59V11a1,1,0,0,1,1.88-.48,1,1,0,0,0,1.37.34,1,1,0,0,0,.34-1.38,3.08,3.08,0,0,0-.46-.59A3,3,0,0,0,12,10.62l-.35-.35a1,1,0,0,0-.1-.79,3.08,3.08,0,0,0-.46-.59,2.94,2.94,0,0,0-1.67-.84L7.1,5.69A7.92,7.92,0,0,1,12,4a8,8,0,0,1,8,8A7.92,7.92,0,0,1,18.31,16.9Z'
    }));
};

export default McClosedCaptioningSlash;