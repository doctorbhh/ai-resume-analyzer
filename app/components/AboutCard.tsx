import React from "react";
import { styled } from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card_container">
        <div className="card_hover">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className={`part part-${i + 1}`} />
          ))}
        </div>

        <div className="card">
          <div className="say-hi">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 71 74"
              className="icon_say-hi"
            >
              <path
                fill="#fbffff94"
                d="M43.6574 32.6925C46.2318 27.3745 42.4638 8.00882 50.0978 4.62384C53.3046 3.19858 56.1818 5.55916 57.0637 8.98869C58.7918 15.723 56.7074 24.034 54.9793 30.5011C54.712 31.5166 53.8925 33.7525 54.0261 34.7413C58.5781 27.5437 59.4243 18.9209 63.0587 16.3644C65.9894 14.2978 68.9201 15.4647 70.372 18.7339C72.8573 24.3369 65.6776 37.2266 62.4084 41.7963C67.0227 52.1917 65.9538 64.93 54.9347 70.4083C51.7814 71.21 49.0734 71.2813 45.9556 70.2569C45.9378 70.2569 45.6973 70.1767 45.6706 70.1678C41.0741 73.2588 30.358 73.7309 27.4362 72.3502C20.6395 68.8138 18.2522 61.8479 6.11974 55.3273C4.40052 54.4098 1.96868 53.2518 0.721583 51.0159C-2.53869 45.1902 6.16428 41.0748 14.3773 44.5666C16.7023 45.5554 20.5772 48.1565 22.2251 50.624C23.7395 49.7688 22.9556 47.9071 22.047 44.4954C19.3479 34.4206 8.0082 21.9763 9.7096 14.7699C10.8676 9.85275 16.0965 7.11804 20.0338 10.984C25.5923 16.4535 29.0574 27.9624 31.7031 35.2045C32.8166 34.4117 32.7453 35.2668 31.5873 30.9554C30.2689 26.0472 28.6388 21.1657 27.6322 16.3377C26.492 10.8415 24.746 2.69084 31.4091 0.321349C40.1744 -2.80531 42.2232 18.4132 42.8201 23.6421L43.6841 32.7014L43.6574 32.6925Z"
              />
            </svg>
          </div>

          <div className="title">
            <span>Hi, I'm Bharath 👋</span>
          </div>

          <div className="paragraph">
            <span>
              I’m a passionate web developer who loves crafting interactive,
              elegant, and performance-focused digital experiences. I enjoy
              merging design and code to create something people love to use.
            </span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .card_container {
    --X: 0deg;
    --Y: 0deg;
    --Z: 0deg;
    --angleX: 15deg;
    --angleY: 20deg;

    cursor: pointer;
    position: relative;
    perspective: 1000px;
  }

  .card_hover {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .card_hover .part {
    width: 20%;
    height: calc(100% / 3);
    background-color: transparent;
  }

  /* 3D Tilt Zones */
  .card_container:has(.part-1:hover) {
    --X: var(--angleX);
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-2:hover) {
    --X: var(--angleX);
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-3:hover) {
    --X: var(--angleX);
  }
  .card_container:has(.part-4:hover) {
    --X: var(--angleX);
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-5:hover) {
    --X: var(--angleX);
    --Y: var(--angleY);
  }
  .card_container:has(.part-6:hover) {
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-7:hover) {
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-9:hover) {
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-10:hover) {
    --Y: var(--angleY);
  }
  .card_container:has(.part-11:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-12:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-13:hover) {
    --X: calc(var(--angleX) * -1);
  }
  .card_container:has(.part-14:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-15:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: var(--angleY);
  }

  /* CARD STYLE */
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2rem;
    width: 320px;
    height: 380px;
    border-radius: 1rem;
    background: linear-gradient(135deg, #1b263b, #0d1b2a);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);

    transform-origin: center;
    transform: rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z));
    transition: transform 0.3s ease, background 0.4s ease, box-shadow 0.4s ease;
  }

  .card_container:hover .card {
    background: linear-gradient(135deg, #3b82f6, #0ea5e9);
    box-shadow: 0 15px 35px rgba(14, 165, 233, 0.5);
  }

  .say-hi {
    position: relative;
    width: 100%;
    height: 2rem;
    background-color: transparent;
  }

  .icon_say-hi {
    position: absolute;
    bottom: 0;
    left: -0.5rem;
    width: 3rem;
    opacity: 0;
    transform-origin: 60% 90%;
    transform: rotate(0deg);
    filter: drop-shadow(0 0 0.5rem #2b2b2b);
    transition: all 0.3s ease-in-out;
  }

  .card_container:hover .card .icon_say-hi {
    width: 5rem;
    opacity: 1;
    animation: say-hi 0.35s linear infinite alternate;
  }

  @keyframes say-hi {
    to {
      transform: rotate(25deg);
    }
  }

  .title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #f1f5f9;
  }

  .paragraph {
    font-size: 0.95rem;
    font-weight: 500;
    color: #cbd5e1;
    line-height: 1.5rem;
  }

  .light-button button.bt {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .light-button button.bt .button-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: #0f0f0f;
    font-weight: 700;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 20;
  }

  .light-button button.bt .button-holder svg {
    height: 50px;
    fill: #0f0f0f;
    transition: 300ms;
  }

  .light-button button.bt .light-holder {
    position: absolute;
    height: 200px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button button.bt .light-holder .dot {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
  }

  .light-button button.bt .light-holder .light {
    position: absolute;
    top: 0;
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
  }

  .light-button button.bt:hover .button-holder svg {
    fill: rgba(88, 101, 242, 1);
  }

  .light-button button.bt:hover .button-holder {
    color: rgba(88, 101, 242, 1);
    outline: rgba(88, 101, 242, 1) 2px solid;
    outline-offset: 2px;
  }

  .light-button button.bt:hover .light-holder .light {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(88, 101, 242, 1) 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /*Icon2*/

  .light-button2 button.bt2 {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .light-button2 button.bt2 .button-holder2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: transparent;
    font-weight: 700;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 20;
  }

  .light-button2 button.bt2 .button-holder2 svg {
    height: 50px;
    fill: #0f0f0f;
    transition: 300ms;
  }

  .light-button2 button.bt2 .light-holder2 {
    position: absolute;
    height: 200px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button2 button.bt2 .light-holder2 .dot2 {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
  }

  .light-button2 button.bt2 .light-holder2 .light2 {
    position: absolute;
    top: 0;
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
  }

  .light-button2 button.bt2:hover .button-holder2 svg {
    fill: rgba(10, 102, 194, 1);
  }

  .light-button2 button.bt2:hover .button-holder2 {
    color: rgba(10, 102, 194, 1);
    outline: rgba(10, 102, 194, 1) 2px solid;
    outline-offset: 2px;
  }

  .light-button2 button.bt2:hover .light-holder2 .light2 {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(10, 102, 194, 1) 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /*Icon3*/
  .light-button3 button.bt3 {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: center; /* Added to center the button-holder */
    width: 100px; /* Added explicit width */
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .light-button3 button.bt3 .button-holder3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: #0f0f0f;
    font-weight: 700;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 20;
  }

  .light-button3 button.bt3 .button-holder3 svg {
    height: 50px;
    fill: #0f0f0f;
    transition: 300ms;
  }

  .light-button3 button.bt3 .light-holder3 {
    position: absolute;
    height: 200px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button3 button.bt3 .light-holder3 .dot3 {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
    left: 50%; /* Added to center the dot */
    transform: translateX(-50%); /* Added to center the dot */
  }

  .light-button3 button.bt3 .light-holder3 .light3 {
    position: absolute;
    top: 0;
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
  }

  .light-button3 button.bt3:hover .button-holder3 svg {
    fill: rgba(101, 101, 121, 1);
  }

  .light-button3 button.bt3:hover .button-holder3 {
    color: rgba(101, 101, 121, 1);
    outline: rgba(101, 101, 121, 1) 2px solid;
    outline-offset: 2px;
  }

  .light-button3 button.bt3:hover .light-holder3 .light3 {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(101, 101, 121, 1) 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /*Icon4*/

  .light-button4 button.bt4 {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
    outline: none;
    background: none;
    border: none;
  }

  .light-button4 button.bt4 .button-holder4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: #0a0a0a;
    border-radius: 5px;
    color: #0f0f0f;
    font-weight: 700;
    transition: 300ms;
    outline: #0f0f0f 2px solid;
    outline-offset: 20;
  }

  .light-button4 button.bt4 .button-holder4 svg {
    height: 50px;
    fill: #0f0f0f;
    transition: 300ms;
  }

  .light-button4 button.bt4 .light-holder4 {
    position: absolute;
    height: 200px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .light-button4 button.bt4 .light-holder4 .dot4 {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #0a0a0a;
    border-radius: 10px;
    z-index: 2;
  }

  .light-button4 button.bt4 .light-holder4 .light4 {
    position: absolute;
    top: 0;
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
    background: transparent;
  }

  .light-button4 button.bt4:hover .button-holder4 svg {
    fill: rgba(233, 57, 26);
  }

  .light-button4 button.bt4:hover .button-holder4 {
    color: rgba(233, 57, 26);
    outline: rgba(233, 57, 26) 2px solid;
    outline-offset: 2px;
  }

  .light-button4 button.bt4:hover .light-holder4 .light4 {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgb(233, 57, 26) 0%,
      rgba(200, 20, 100, 0) 75%,
      rgba(200, 20, 100, 0) 100%
    );
  }
`;

export default Card;

export const Icon1 = () => {
  return (
    <StyledWrapper>
      <div className="light-button">
        <button className="bt">
          <div className="light-holder">
            <div className="dot" />
            <div className="light" />
          </div>
          <div className="button-holder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
            <p>Discord</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

export const Icon2 = () => {
  return (
    <StyledWrapper>
      <div className="light-button2">
        <button className="bt2">
          <div className="light-holder2">
            <div className="dot2" />
            <div className="light2" />
          </div>
          <div className="button-holder2">
            <svg height="1em" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
            <p>linkedin</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

export const Icon3 = () => {
  return (
    <StyledWrapper>
      <div className="light-button3">
        <button className="bt3">
          <div className="light-holder3">
            <div className="dot3" />
            <div className="light3" />
          </div>
          <div className="button-holder3">
            <svg
              height="1em"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <p>GitHub</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

export const Icon4 = () => {
  return (
    <StyledWrapper>
      <div className="light-button4">
        <button className="bt4">
          <div className="light-holder4">
            <div className="dot4" />
            <div className="light4" />
          </div>
          <div className="button-holder4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={16}
              fill="currentColor"
              className="bi bi-reddit"
              viewBox="0 0 16 16"
            >
              <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z" />
            </svg>
            <p>reddit</p>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};
