import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBrightnessMinus = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14,11H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm7.71.29L19.36,9V5.64a1,1,0,0,0-1-1H15.05L12.71,2.29a1,1,0,0,0-1.42,0L9,4.64H5.64a1,1,0,0,0-1,1V9L2.29,11.29a1,1,0,0,0,0,1.42l2.35,2.34v3.31a1,1,0,0,0,1,1H9l2.34,2.35a1,1,0,0,0,1.42,0l2.34-2.35h3.31a1,1,0,0,0,1-1V15.05l2.35-2.34A1,1,0,0,0,21.71,11.29Zm-4.05,2.64a1,1,0,0,0-.3.71v2.72H14.64a1,1,0,0,0-.71.3L12,19.59l-1.93-1.93a1,1,0,0,0-.71-.3H6.64V14.64a1,1,0,0,0-.3-.71L4.41,12l1.93-1.93a1,1,0,0,0,.3-.71V6.64H9.36a1,1,0,0,0,.71-.3L12,4.41l1.93,1.93a1,1,0,0,0,.71.3h2.72V9.36a1,1,0,0,0,.3.71L19.59,12Z'
    }));
};

export default McBrightnessMinus;