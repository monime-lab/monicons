import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileMedicalAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18,18a1,1,0,0,0-1,1,1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v1a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27.32.32,0,0,0,0-.09,1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.14,1.14,0,0,0,12.07,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3A1,1,0,0,0,18,18ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM20,14H17.5a1,1,0,0,0-.71.29l-1.24,1.25-2.8-3.2a1,1,0,0,0-1.46-.05L9.59,14H8a1,1,0,0,0,0,2h2a1,1,0,0,0,.71-.29L12,14.46l2.8,3.2a1,1,0,0,0,.72.34h0a1,1,0,0,0,.71-.29L17.91,16H20a1,1,0,0,0,0-2Z'
    }));
};

export default McFileMedicalAlt;