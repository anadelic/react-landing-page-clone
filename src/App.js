/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Logo } from './logo.svg';

const headerStyles = css`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 16px 0px;
`;

const divWrapperStyle = css`
  width: 100%;
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoStyles = css`
  overflow: hidden;
  text-decoration: none;
  color: currentcolor;
`;

const navStyles = css`
  font-weight: 500;
  text-align: right;
  @media screen and (min-width: 500px) {
    line-height: calc(28px + 0 * ((100vw - 500px) / 940));
  }
  @media screen and (min-width: 500px) {
    font-size: calc(18px + 0 * ((100vw - 500px) / 940));

    a {
      text-decoration: none;
      color: currentColor;
      font-weight: medium;
    }
  }
`;

const linkStyles = css`
  padding: 20px;
  border-radius: 8px;
  background-color: transparent;
  position: relative;
  z-index: 1;
  :hover {
    background-color: #d3d3d3;
    transition: background-color 0.2s ease 0s;
  }
`;

const buttonStyle = css`
  margin-left: 48px;
  display: inline-block;
  padding: 8px 24px;
  border-radius: 20px;
  background-color: black;
  color: white;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  :hover {
    background-color: green;
    transition: background-color 0.2s ease 0s;
  }
`;

const mainStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const heroTextStyle = css`
  color: #1d1d1d;
  font-weight: 900;
  text-align: center;
  font-size: 10rem;
  line-height: 0.85em;
  text-transform: uppercase;
`;

const eatStyle = css`
  position: relative;
  left: -32px;
`;

const freshStlye = css`
  position: relative;
  z-index: 1;
`;

const imageStyle = css`
  position: absolute;
  top: 8%;
  left: 48%;
  border: 0px;
  width: 360px;
`;

const containerStyle = css`
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <>
      <header css={headerStyles}>
        <div css={divWrapperStyle}>
          <a href="/#" css={logoStyles}>
            <Logo />
          </a>
          <nav css={navStyles}>
            <span css={linkStyles}>
              <a href="/#">About</a>
            </span>
            <span css={linkStyles}>
              <a href="/#"> Awareness</a>
            </span>
            <span css={linkStyles}>
              <a href="/#"> Support</a>
            </span>
            <span css={buttonStyle}>
              <a href="/#">Download</a>{' '}
            </span>
          </nav>
        </div>
      </header>
      <main>
        <div css={mainStyles}>
          <h1 css={heroTextStyle}>
            <span css={eatStyle}>EAT</span>
            <br />
            <span css={freshStlye}>FRESH</span>
          </h1>
          <img
            css={imageStyle}
            src="https://kiff.app/static/en-hero-light-ns-cut.webp"
            alt="kiff app screenshot"
          />
        </div>
        <div css={containerStyle}>
          <h2>
            Save time and money managing your fridge or <br />
            pantry with Kiff.
          </h2>
          <a> </a>
        </div>
      </main>
    </>
  );
}
