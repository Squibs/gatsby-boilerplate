/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { GlobalStyles } from './src/vistas/styles';
import { GlobalTheme } from './src/vistas/theme';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <GlobalTheme>{element}</GlobalTheme>
    </>
  );
};
