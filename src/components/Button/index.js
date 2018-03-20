import styled from 'styled-components';
import { string } from 'prop-types';

export const Button = styled.button`
  background-color: ${props => props.color};
  color: ${props => props.textColor || 'white'};
  font-family: Sans-Serif;
  padding: .5rem 1rem;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`;

Button.propTypes = {
  color: string.isRequired,
  textColor: string
};
