import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SEO } from '../components';

/* --------------------------------- styles --------------------------------- */

const TESTDIV = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.whiteTint};

  & p {
    margin-bottom: 465px;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.whiteTint};
`;

/* ---------------------------------- types --------------------------------- */

/* -------------------------------- component ------------------------------- */

const pageTwo = () => {
  return (
    <TESTDIV>
      <h1>Squibs&apos; Gatsby Starter</h1>
      <p>This is page two.</p>
      <StyledLink to="/">Go to Page 1</StyledLink>
    </TESTDIV>
  );
};

export default pageTwo;

export const Head = () => <SEO title="Page Two" />;
