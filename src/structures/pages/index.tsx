import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
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

  & .snail {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.for3TabletPortraitUp()`
    & .snail {
      display: initial;
    }
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;

  & * {
    margin: 5px;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.whiteTint};
`;

/* ---------------------------------- types --------------------------------- */

type DataProps = {
  data: {
    Snail: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };

    Eel: {
      publicURL: string;
    };
  };
};

type IndexPageProps = DataProps;

/* -------------------------------- component ------------------------------- */

const IndexPage = ({ data }: IndexPageProps) => {
  const snail = data.Snail.childImageSharp.gatsbyImageData;
  const eel = data.Eel.publicURL;

  return (
    <TESTDIV>
      <h1>Squibs&apos; Gatsby Starter</h1>
      <ImageContainer>
        <GatsbyImage class="snail" image={snail} alt="" />
        <img src={eel} alt="" />
      </ImageContainer>
      <StyledLink to="/pageTwo">Go to Page 2</StyledLink>
    </TESTDIV>
  );
};

export default IndexPage;

export const query = graphql`
  {
    Snail: file(relativePath: { eq: "indexPage/my-ramshorn-snail.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, height: 450)
      }
    }

    Eel: file(relativePath: { eq: "indexPage/my-snowflake-eel.gif" }) {
      publicURL
    }
  }
`;

export const Head = () => <SEO title="Home Page" />;
