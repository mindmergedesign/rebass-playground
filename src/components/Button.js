import styled from 'styled-components';
import { Button as BaseButton } from 'rebass';

const Button = styled(BaseButton)`
  background-color: ${props => props.theme.colors.primary};
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: black;
  }
  border-radius: 0.25em;
  color: white;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.sans};
  font-size: 0.8em;
  font-weight: bold;
`;

Button.defaultProps = {
  px: '1.75em',
  py: '1em'
};

export default Button;
