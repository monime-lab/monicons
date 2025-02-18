import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McGoogleHangoutsAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8.9917,7.69049a2,2,0,0,0,0,4l.01514-.00153v.50147a.501.501,0,0,1-.5.5,1,1,0,0,0,0,2,2.50232,2.50232,0,0,0,2.5-2.5v-2.5A.94144.94144,0,0,0,10.9765,9.54,1.99365,1.99365,0,0,0,8.9917,7.69049Zm2.99951-6.68854a9.78734,9.78734,0,0,0-1,19.52344V22.002a.99911.99911,0,0,0,1.23926.97071A12.53481,12.53481,0,0,0,21.69727,11.998a9.73409,9.73409,0,0,0-9.70606-10.9961ZM19.709,11.78223a10.54778,10.54778,0,0,1-6.71777,8.86035V19.57617a.99942.99942,0,0,0-1-1,7.78711,7.78711,0,1,1,7.78809-7.78711A7.94524,7.94524,0,0,1,19.709,11.78223ZM14.9917,7.69049a2,2,0,1,0,0,4l.01514-.00153v.50147a.501.501,0,0,1-.5.5,1,1,0,0,0,0,2,2.50232,2.50232,0,0,0,2.5-2.5v-2.5A.94144.94144,0,0,0,16.9765,9.54,1.99365,1.99365,0,0,0,14.9917,7.69049Z'
    }));
};

export default McGoogleHangoutsAlt;