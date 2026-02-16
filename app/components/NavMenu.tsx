import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router";

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="menu">
        <Link to="/" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={192}
              height={192}
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width={256} height={256} fill="none" />
              <path
                d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
              />
            </svg>
          </span>
          <span className="link-title">Home</span>
        </Link>
        <Link to="/wipe" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={192}
              height={192}
              fill="none"
              viewBox="0 0 256 256"
              stroke="currentColor"
            >
              <rect
                x="40"
                y="48"
                width="176"
                height="48"
                rx="8"
                strokeWidth="16"
                stroke="currentColor"
                fill="none"
              />
              <rect
                x="40"
                y="104"
                width="176"
                height="48"
                rx="8"
                strokeWidth="16"
                stroke="currentColor"
                fill="none"
              />
              <rect
                x="40"
                y="160"
                width="176"
                height="48"
                rx="8"
                strokeWidth="16"
                stroke="currentColor"
                fill="none"
              />
              <circle cx="76" cy="72" r="8" fill="currentColor" />
              <circle cx="76" cy="128" r="8" fill="currentColor" />
              <circle cx="76" cy="184" r="8" fill="currentColor" />
            </svg>
          </span>
          <span className="link-title">Data's</span>
        </Link>

        <Link to="/about" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={192}
              height={192}
              fill="none"
              viewBox="0 0 256 256"
              stroke="currentColor"
            >
              <circle
                cx="128"
                cy="128"
                r="96"
                stroke="currentColor"
                strokeWidth="16"
                fill="none"
              />
              <circle cx="128" cy="80" r="12" fill="currentColor" />
              <line
                x1="128"
                y1="112"
                x2="128"
                y2="176"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="link-title">About Me</span>
        </Link>

        <Link to="/auth" className="link">
          <span className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={192}
              height={192}
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width={256} height={256} fill="none" />
              <circle
                cx={128}
                cy={96}
                r={64}
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={16}
              />
              <path
                d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={16}
              />
            </svg>
          </span>
          <span className="link-title">Profile</span>
        </Link>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .menu {
    padding: 0.5rem;
    background-color: #101828;
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.075);
  }

  .link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 50px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transform-origin: center left;
    transition: width 0.2s ease-in;
    text-decoration: none;
    color: inherit;
    min-height: 44px; 

    &:before {
      position: absolute;
      z-index: -1;
      content: "";
      display: block;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      top: 0;
      transform: translateX(100%);
      transition: transform 0.2s ease-in;
      transform-origin: center right;
      background-color: #eee;
    }

    &:hover,
    &:focus {
      outline: 0;
      width: 130px;

      &:before,
      .link-title {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media (hover: none) and (pointer: coarse) {
      &:active {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(0.98);
      }
    }
  }

  .link-icon {
    width: 30px;
    height: 28px;
    display: block;
    flex-shrink: 0;
    left: 18px;
    position: absolute;
    svg {
      width: 28px;
      height: 28px;
    }
  }

  .link-title {
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
    transform-origin: center right;
    display: block;
    text-align: center;
    text-indent: 30px;
    width: 100%;
    opacity: 0;
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (hover: hover) and (pointer: fine) {
    .link:hover .link-title,
    .link:focus .link-title {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .menu {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 15px 15px 0 0;
      justify-content: space-around;
      padding: 0.75rem 0.5rem;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    }

    .link {
      width: calc(25% - 0.25rem);
      height: 48px;
      max-width: 80px; 
      flex: 1;
      &:before {
        display: none; 
      }
    }

    .link-icon {
      left: auto;
      position: relative;
      width: 24px;
      height: 24px;
      margin-right: 0.25rem;
      svg {
        width: 20px;
        height: 20px;
      }
    }

    .link-title {
      transform: translateX(0);
      opacity: 1;
      text-indent: 0;
      font-size: 0.75rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (max-width: 480px) {
    .menu {
      padding: 0.5rem 0.25rem;
    }

    .link {
      height: 44px;
      max-width: 70px;
    }

    .link-icon {
      svg {
        width: 18px;
        height: 18px;
      }
    }

    .link-title {
      font-size: 0.7rem;
    }
  }
`;

export default Radio;
