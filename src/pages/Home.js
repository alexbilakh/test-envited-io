import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeadingContainer>
          <StyledHeading>
            Imagine if <br />
            <span>Snapchat</span> <br />
            had events. <br />
          </StyledHeading>
          <StyledSubHeading>
            Easily host and share events with your friends across any social
            media.
          </StyledSubHeading>

          <StyledCreateButtonDesktopContainer>
            <Link to={"/create"} className="btn">
              🎉 Create my event
            </Link>
          </StyledCreateButtonDesktopContainer>
        </StyledHeadingContainer>

        <StyledImageContainer>
          <StyledImage alt="Movie Night" src="/images/Landing page image.svg" />
        </StyledImageContainer>

        <StyledButtonTabletContainer>
          <Link to={"/create"} className="btn">
            🎉 Create my event
          </Link>
        </StyledButtonTabletContainer>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Home;

// ========= Start styled-components ==========
const StyledWrapper = styled.div(
  ({ theme: { colors } }) => `
    width: 100%;
    min-height: 100vh;
    background-color: ${colors.magnolia};
    display: flex;
    justify-content: center;
    align-items: center;
  `
);
const StyledContainer = styled.div(
  ({ theme: { breakPoints } }) => `
    width: 100%;
    height: 100%;
    padding: 60px 27px 15px;
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakPoints.tabletM}) {
      padding: 60px 40px 25px;
    }
    @media (min-width: ${breakPoints.laptopM}) {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      padding: 100px 50px;
      max-width: 1280px;
      margin: 0 auto;
    }
  `
);
const StyledHeadingContainer = styled.div(
  ({ theme: { breakPoints } }) => `
    text-align: center;
    max-width: 321px;
    margin: 0 auto;

    @media (min-width: ${breakPoints.tabletM}) {
      max-width: 521px;
    }
    @media (min-width: ${breakPoints.laptopM}) {
      margin: 0;
      text-align: right;
    }
  `
);
const StyledHeading = styled.h1(
  ({ theme: { colors, breakPoints } }) => `
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: ${colors.violentViolet};
    margin: 0px;

    & > span {
      background: linear-gradient(90deg, ${colors.mediumPurple} 24.2%, ${colors.heliotrope} 120.46%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    @media (min-width: ${breakPoints.tabletM}) {
      font-size: 64px;
      line-height: 64px;
    }
  `
);
const StyledSubHeading = styled.p(
  ({ theme: { colors, breakPoints } }) => `
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: ${colors.emperor};
    margin: 20px 0 0;

    @media (min-width: ${breakPoints.tabletM}) {
      font-size: 24px;
      line-height: 28px;
    }
  `
);
const StyledCreateButtonDesktopContainer = styled.div(
  ({ theme: { breakPoints } }) => `
    display: none;
    margin-top: 52px;
    
    @media (min-width: ${breakPoints.laptopM}) {
      display: block;
    }
  `
);
const StyledImageContainer = styled.div`
  text-align: center;
`;
const StyledImage = styled.img(
  ({ theme: { breakPoints } }) => `
    width: 100%;
    max-width: 165px;
    margin: 36px 0px;

    @media (min-width: ${breakPoints.tabletM}) {
      margin: 55px 0px;
      max-width: 311px;
    }
    @media (min-width: ${breakPoints.laptopM}) {
      margin: 0px;
      max-width: 440px;
    }
  `
);
const StyledButtonTabletContainer = styled.div(
  ({ theme: { breakPoints } }) => `
    text-align: center;
    @media (min-width: ${breakPoints.laptopM}) {
      display: none;
    }
  `
);
// ========= End styled-components ==========
