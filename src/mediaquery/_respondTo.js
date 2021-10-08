import { css } from 'styled-components';
import { breakpoints } from './_variables';

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // console.log(accumulator, label)  --- understand how works this
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);