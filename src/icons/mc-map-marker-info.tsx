import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMapMarkerInfo = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm8.46-.32A8.5,8.5,0,0,0,7.3,3.36,8.56,8.56,0,0,0,3.54,9.63,8.46,8.46,0,0,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05ZM12.92,7.57a.56.56,0,0,0-.09-.17l-.12-.15A1,1,0,0,0,11.8,7L11.62,7l-.18.09-.15.13-.12.15a.56.56,0,0,0-.09.17.6.6,0,0,0-.06.19A1.23,1.23,0,0,0,11,8a.88.88,0,0,0,.08.39,1.11,1.11,0,0,0,.21.32,1.06,1.06,0,0,0,.33.22,1.07,1.07,0,0,0,.76,0,1.19,1.19,0,0,0,.33-.22,1.11,1.11,0,0,0,.21-.32A1,1,0,0,0,13,8a1.23,1.23,0,0,0,0-.19A.6.6,0,0,0,12.92,7.57Z'
    }));
};

export default McMapMarkerInfo;