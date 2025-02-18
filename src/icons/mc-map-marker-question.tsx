import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMapMarkerQuestion = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12.44,13.11,12.27,13a1,1,0,0,0-1.09.22.87.87,0,0,0-.22.32,1,1,0,0,0-.08.39,1,1,0,0,0,.08.38,1.07,1.07,0,0,0,.54.54,1,1,0,0,0,.38.08,1.09,1.09,0,0,0,.39-.08,1,1,0,0,0,.32-.22,1,1,0,0,0,0-1.41ZM11.88,6A2.75,2.75,0,0,0,9.5,7.32a1,1,0,1,0,1.73,1A.77.77,0,0,1,11.88,8a.75.75,0,1,1,0,1.5,1,1,0,1,0,0,2,2.75,2.75,0,1,0,0-5.5Zm8.58,3.68A8.5,8.5,0,0,0,7.3,3.36,8.56,8.56,0,0,0,3.54,9.63,8.46,8.46,0,0,0,6,16.46l5.3,5.31a1,1,0,0,0,1.42,0L18,16.46A8.46,8.46,0,0,0,20.46,9.63ZM16.6,15.05,12,19.65l-4.6-4.6A6.49,6.49,0,0,1,5.53,9.83,6.57,6.57,0,0,1,8.42,5a6.47,6.47,0,0,1,7.16,0,6.57,6.57,0,0,1,2.89,4.81A6.49,6.49,0,0,1,16.6,15.05Z'
    }));
};

export default McMapMarkerQuestion;