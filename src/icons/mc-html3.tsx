import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McHtml3 = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M3.19467,2,4.79734,19.99433,11.98947,22l7.2119-2.01315L20.80533,2ZM17.476,6.12274l-.53371,5.99468.00193.03234-.00255.07415v-.00068l-.37922,4.19135-.04178.37236L12,18.03717v.00063l-.00366.00317L7.48367,16.78309l-.30574-3.46518h2.213l.15692,1.76226,2.45276.6644L12,15.74569l2.46141-.6743.26028-2.86933H9.57589L9.53173,11.717l-.10093-1.1364-.05224-.61022h5.53877l.20163-2.2317H6.68232L6.638,7.2542l-.10026-1.137L6.48482,5.507H17.52887Zm0,0'
    }));
};

export default McHtml3;