/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { GlobalStyles } from './src/theme/styles';
import { GlobalLayout } from './src/theme/layouts';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <GlobalLayout>{element}</GlobalLayout>
    </>
  );
};
