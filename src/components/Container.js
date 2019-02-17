import styled from 'styled-components';
import { Box } from 'rebass';

const Container = styled(Box)({
  maxWidth: '992px' // Should match your breakpoint from theme.js
});

Container.defaultProps = {
  mx: 'auto',
  px: '1em'
};

export default Container;
