import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMap = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.32,5.05l-6-2h-.07a.7.7,0,0,0-.14,0h-.23l-.13,0h-.07L9,5,3.32,3.05a1,1,0,0,0-.9.14A1,1,0,0,0,2,4V18a1,1,0,0,0,.68.95l6,2h0a1,1,0,0,0,.62,0h0L15,19.05,20.68,21A1.19,1.19,0,0,0,21,21a.94.94,0,0,0,.58-.19A1,1,0,0,0,22,20V6A1,1,0,0,0,21.32,5.05ZM8,18.61,4,17.28V5.39L8,6.72Zm6-1.33-4,1.33V6.72l4-1.33Zm6,1.33-4-1.33V5.39l4,1.33Z'
    }));
};

export default McMap;