import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSilentSquint = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7.66,12.21a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l1.5-1.5a1,1,0,0,0,0-1.42l-1.5-1.5A1,1,0,0,0,7.66,9.21l.8.79-.8.79A1,1,0,0,0,7.66,12.21Zm7.5,0a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L15.79,10l.79-.79a1,1,0,1,0-1.42-1.42l-1.5,1.5a1,1,0,0,0,0,1.42Zm.11,2a1,1,0,0,0-1.2,0l-.74.55-.73-.55a1,1,0,0,0-1.2,0l-.73.55-.74-.55a1,1,0,0,0-1.2,0l-1.33,1a1,1,0,1,0,1.2,1.6l.73-.55.74.55,0,0a.67.67,0,0,0,.12.06.83.83,0,0,0,.22.08l.13,0h.23l.12,0a1.12,1.12,0,0,0,.33-.16l.73-.55.73.55a1,1,0,0,0,1,.11l.1-.05a.39.39,0,0,0,.11-.06l.74-.55.73.55a1,1,0,0,0,.6.2,1,1,0,0,0,.8-.4,1,1,0,0,0-.2-1.4ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
    }));
};

export default McSilentSquint;