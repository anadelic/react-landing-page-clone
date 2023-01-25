/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Carrots } from './carrots.svg';
import { ReactComponent as Lettuce } from './lettuce.svg';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Pineapple } from './pineapple.svg';
import { ReactComponent as Tomatoes } from './tomatoes.svg';

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
  a {
    text-decoration: none;
    color: currentColor;
    font-weight: medium;
  }
`;

const linkStyles = css`
  padding: 20px;
  border-radius: 8px;
  background-color: transparent;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 824px) {
    display: none;
  }
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
  @media screen and (max-width: 824px) {
    font-size: 5rem;
  }
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
  @media screen and (max-width: 824px) {
    width: 200px;
    left: 43%;
  }
`;

const containerStyle = css`
  max-width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 824px) {
    text-align: center;
  }

  h2 {
    color: #36b535;
    max-width: 725px;
    margin: 0px auto;
    font-weight: 600;
    text-align: center;
    font-size: 33px;
  }
`;
const foodBoxStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 4.5rem;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 760px;
  @media screen and (max-width: 824px) {
    max-width: 500px;
    flex-direction: column;
  }
`;

const lettuceBoxStyle = css`
  background: linear-gradient(
    135deg,
    rgb(202, 236, 172) 0%,
    rgb(131, 208, 197) 100%
  );
  border-radius: 1.25rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  margin: 10px 10px;
`;

const pineappleBoxStyle = css`
  background: linear-gradient(
    135deg,
    rgb(255, 239, 184) 0%,
    rgb(251, 220, 113) 100%
  );
  border-radius: 1.25rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  margin: 10px 10px;
`;
const tomatoesBoxStyle = css`
  background: linear-gradient(
    135deg,
    rgb(255, 200, 143) 0%,
    rgb(255, 143, 143) 100%
  );
  border-radius: 1.25rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  margin: 10px 10px;
`;
const carrotBoxStyle = css`
  background: linear-gradient(
    135deg,
    rgb(255, 232, 188) 0%,
    rgb(255, 156, 84) 100%
  );
  border-radius: 1.25rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  margin: 10px 10px;
`;

const sectionStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 7rem 9rem 10px 9rem;
    font-weight: 700;
    display: block;
    font-size: 60px;
  }

  p {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 600;
    color: rgb(54, 181, 53);
    text-align: center;
  }
`;
const sectionExpirationDates = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const expirationDatesTextDiv = css`
  flex-wrap: wrap;
  margin-left: 120px;
  width: 460px;
  margin-top: 120px;
  h2 {
    font-size: 60px;
    font-weight: 700;
  }
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 600;
    color: rgb(54, 181, 53);
  }
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
        </div>
        <section css={sectionStyle}>
          <div css={foodBoxStyle}>
            <Lettuce css={lettuceBoxStyle} />
            <Pineapple css={pineappleBoxStyle} />

            <Tomatoes css={tomatoesBoxStyle} />
            <Carrots css={carrotBoxStyle} />
          </div>
          <div>
            <h1>
              Don't let your
              <br /> food go
              <br /> to waste.
            </h1>
            <p>
              Kiff tracks your food's state and orders it by
              <br /> priority, so you will know what to eat at a glance.
            </p>
          </div>
        </section>
        <section css={sectionExpirationDates}>
          <div css={expirationDatesTextDiv}>
            <h2>Expiration dates under control.</h2>
            <p>
              If your food has an expiration date, Kiff will keep it under
              control so you can eat it before it's too late.
            </p>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
}
