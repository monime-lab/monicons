import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McGameStructure = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,18H19V15a1,1,0,0,0-1-1H13V11.29l1.13.59a1,1,0,0,0,1.45-1.05l-.4-2.37L16.9,6.77a1,1,0,0,0,.26-1,1,1,0,0,0-.81-.68L14,4.72,12.9,2.56a1,1,0,0,0-1.8,0L10,4.72l-2.39.35a1,1,0,0,0-.81.68,1,1,0,0,0,.26,1L8.82,8.46l-.4,2.37a1,1,0,0,0,1.45,1.05L11,11.29V14H6a1,1,0,0,0-1,1v3H3a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V20H8v1a1,1,0,0,0,2,0V19a1,1,0,0,0-1-1H7V16H17v2H15a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V20h4v1a1,1,0,0,0,2,0V19A1,1,0,0,0,21,18ZM12,8.63a1,1,0,0,0-.47.12l-.8.42.15-.9a1,1,0,0,0-.29-.88l-.65-.64.9-.13a1,1,0,0,0,.76-.54l.4-.82.4.82a1,1,0,0,0,.76.54l.9.13-.65.64a1,1,0,0,0-.29.88l.15.9-.8-.42A1,1,0,0,0,12,8.63Z'
    }));
};

export default McGameStructure;