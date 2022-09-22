import React from 'react';
import styled from 'styled-components';
import { SEO } from '../components';

/* --------------------------------- styles --------------------------------- */

const TESTDIV = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

/* ---------------------------------- types --------------------------------- */

/* -------------------------------- component ------------------------------- */

const IndexPage = () => {
  return (
    <TESTDIV>
      <h1>Squibs&apos; Gatsby Starter</h1>
    </TESTDIV>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Home Page" />;
