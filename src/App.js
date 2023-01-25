/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Avocado } from './svg/avocado.svg';
import { ReactComponent as Carrots } from './svg/carrots.svg';
import { ReactComponent as Expires } from './svg/expires.svg';
import { ReactComponent as Expires2 } from './svg/expires2.svg';
import { ReactComponent as Fresh } from './svg/fresh.svg';
import { ReactComponent as Lettuce } from './svg/lettuce.svg';
import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as Milk } from './svg/milk.svg';
import { ReactComponent as Milk2 } from './svg/milk2.svg';
import { ReactComponent as Pineapple } from './svg/pineapple.svg';
import { ReactComponent as Tomatoes } from './svg/tomatoes.svg';

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
  max-height: 500px;

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
    position: relative;
    top: -250px;
  }
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 600;
    color: rgb(54, 181, 53);
    position: relative;
    top: -250px;
  }
`;
const secondBoxSectionStyle = css`
  padding: 0px 0px 410px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const milkSvg = css`
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(218, 227, 244) 0%,
    rgb(146, 163, 195) 100%
  );
  color: rgb(0, 0, 0);
  position: relative;
  top: 120px;
  left: 150px;
`;
const expireSvg = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;

  color: rgb(29, 29, 29);
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  position: relative;
  top: 20px;
  left: 300px;
`;
const expire2Svg = css`
  color: rgb(29, 29, 29);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  border-radius: 20px;
  position: relative;
  top: -60px;
  left: 440px;
`;
const alertsSection = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 260px;
`;

const alertsTextStyle = css`
  flex-wrap: wrap;
  margin-left: 400px;
  padding: 30px;

  h2 {
    font-size: 60px;
    font-weight: 800;
    position: relative;
    top: -250px;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 600;
    color: rgb(54, 181, 53);
    position: relative;
    top: -250px;
    text-align: center;
  }
`;
const alertSvgStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 50px;
  margin-top: -60px;
`;
const avocadoSvgStyle = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(220, 241, 176) 0%,
    rgb(131, 208, 139) 100%
  );
  color: rgb(0, 0, 0);
  border-radius: 50%;
  position: relative;
  top: 0px;
  left: 100px;
`;

const milk2Style = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(246, 245, 242) 0%,
    rgb(211, 219, 235) 100%
  );
  color: rgb(0, 0, 0);
  border-radius: 50%;
  position: relative;
  top: -160px;
  left: 230px;
`;

const freshSvgStyle = css`
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 24px;
  background: linear-gradient(
    135deg,
    rgb(255, 232, 188) 0%,
    rgb(255, 156, 84) 100%
  );
  color: rgb(0, 0, 0);
  border-radius: 50%;
  position: relative;
  top: -280px;
  left: 370px;
`;
const darkModeStyle = css`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 120px 0px;
  margin: 240px 0px;
  background: rgb(20, 20, 20);

  color: rgb(255, 255, 255);
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
            <span>
              <a href="/#">About</a>
            </span>
            <span>
              <a href="/#"> Awareness</a>
            </span>
            <span>
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
          <div css={secondBoxSectionStyle}>
            <Milk css={milkSvg} />
            <Expires css={expireSvg} />
            <Expires2 css={expire2Svg} />
          </div>
        </section>
        <section css={alertsSection}>
          <div css={alertSvgStyle}>
            <Avocado css={avocadoSvgStyle} />
            <Milk2 css={milk2Style} />
            <Fresh css={freshSvgStyle} />
          </div>
          <div css={alertsTextStyle}>
            <h2>Alerts, always in time.</h2>
            <p>
              Enable notifications and Kiff will alert you when your food stops
              being fresh or is about to expire.
            </p>
          </div>
          <div css={darkModeStyle}>
            <div>
              <h2>And of course, dark mode. </h2>
              <p>
                Perfect for those midnight trips to the fridge for a healthy
                snack.
              </p>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
}
