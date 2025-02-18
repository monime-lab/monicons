import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McAdobeAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10.24707,2.40278a.99893.99893,0,0,0-.83057-.44336H1.9917a.99974.99974,0,0,0-1,1v18.082a1.00015,1.00015,0,0,0,1.92529.37989l7.42481-18.082A1.00042,1.00042,0,0,0,10.24707,2.40278ZM2.9917,15.97309V3.95942H7.9248Zm19-14.01367H14.47412a1,1,0,0,0-.92139,1.3877l7.51758,17.84961a.99894.99894,0,0,0,.9209.6123,1.04879,1.04879,0,0,0,.19824-.01953,1.001,1.001,0,0,0,.80225-.98047V2.95942A.99974.99974,0,0,0,21.9917,1.95942Zm-1,13.89844L15.98047,3.95942H20.9917ZM12.94922,9.52a.99993.99993,0,0,0-.92578-.64648h-.00977a.99988.99988,0,0,0-.92822.62793L8.02637,17.13227a1,1,0,0,0,.92822,1.37207H11.209l1.52247,2.99024a.999.999,0,0,0,.89111.54687h2.61279a1.00015,1.00015,0,0,0,.93555-1.35351Zm1.28662,10.52148-1.52246-2.99023a.99905.99905,0,0,0-.89111-.54688H10.43262l1.55371-3.875,2.80176,7.41211Z'
    }));
};

export default McAdobeAlt;