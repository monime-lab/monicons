import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBatteryBolt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M6.69,15H4V9H6.31a1,1,0,0,0,0-2H4A2,2,0,0,0,2,9v6a2,2,0,0,0,2,2H6.69a1,1,0,1,0,0-2Zm7.2-2.56a1.27,1.27,0,0,0,.06-.18,1.42,1.42,0,0,0,0-.2s0,0,0-.06,0-.08,0-.12a.65.65,0,0,0-.05-.2.89.89,0,0,0-.08-.17.86.86,0,0,0-.1-.16l-.16-.13-.09-.09-.06,0-.18-.06-.2,0H9.73l1.45-2.5a1,1,0,1,0-1.74-1l-2.31,4s0,0,0,.06a1.27,1.27,0,0,0-.06.18,1.42,1.42,0,0,0,0,.2S7,12,7,12s0,.08,0,.12a.65.65,0,0,0,.05.2.89.89,0,0,0,.08.17.86.86,0,0,0,.1.16l.16.13a.76.76,0,0,0,.09.09l.07,0,.09,0A1,1,0,0,0,8,13h3.27L9.82,15.5a1,1,0,0,0,1.74,1l2.31-4S13.88,12.46,13.89,12.44ZM21,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,21,10ZM17,7H14.31a1,1,0,0,0,0,2H17v6H14.69a1,1,0,1,0,0,2H17a2,2,0,0,0,2-2V9A2,2,0,0,0,17,7Z'
    }));
};

export default McBatteryBolt;