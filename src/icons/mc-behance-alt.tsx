import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBehanceAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M22.1084,15.03169a.99748.99748,0,0,0-1.21582.72265,2.99839,2.99839,0,0,1-5.90088-.7539v-1h7a.99974.99974,0,0,0,1-1,5,5,0,1,0-10,0v2a4.99837,4.99837,0,0,0,9.83935,1.24609A.999.999,0,0,0,22.1084,15.03169Zm-4.1167-5.03125a3.01119,3.01119,0,0,1,2.11816.87207,3.04438,3.04438,0,0,1,.69867,1.12793H15.176A2.99509,2.99509,0,0,1,17.9917,10.00044Zm-2-3h4a1,1,0,0,0,0-2h-4a1,1,0,0,0,0,2Zm-6.082,4.71716a3.98653,3.98653,0,0,0-2.918-6.71716h-5a.99973.99973,0,0,0-1,1v13a.99974.99974,0,0,0,1,1h5.5a4.492,4.492,0,0,0,2.418-8.28284ZM2.9917,7.00044h4a2,2,0,1,1,0,4h-4Zm4.5,11h-4.5v-5h4.5a2.5,2.5,0,0,1,0,5Z'
    }));
};

export default McBehanceAlt;