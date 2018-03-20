import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.span`
  display: inline-flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 100;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
  color: #ddd;
  background: linear-gradient(to right, #53346d, #000000);
`;

export function Logo() {
  return <LogoWrapper><span role="img" aria-label="">🔎</span> Emoji Picker</LogoWrapper>;
}
