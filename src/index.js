import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { Box, Flex, Text } from 'rebass';

import Container from './components/Container';
import theme from './components/theme';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Normalize />
      <ThemeProvider theme={theme}>
        <Container>
          <Text as="h1" fontSize={[6, 7, 8]} textAlign="center">
            Rebass Responsive Grid
          </Text>
          <Flex flexWrap="wrap" mx={-2} my={4}>
            <Box px={2} py={2} width={[1, 1 / 2]}>
              <Text
                p={2}
                color="white"
                bg={['blue', 'pink']}
                textAlign="center"
              >
                1/2
              </Text>
            </Box>
            <Box px={2} py={2} width={[1, 1 / 2]}>
              <Text
                p={2}
                color="white"
                bg={['blue', 'tomato']}
                textAlign="center"
              >
                1/2
              </Text>
            </Box>
            <Box px={2} py={2} width={1 / 3}>
              <Text p={2} color="white" bg="blue">
                1/3
              </Text>
            </Box>
            <Box px={2} py={2} width={1 / 3}>
              <Text p={2} color="white" bg="blue">
                1/3
              </Text>
            </Box>
            <Box px={2} py={2} width={1 / 3}>
              <Text p={2} color="white" bg="blue">
                1/3
              </Text>
            </Box>
            <Box px={2} py={2} width={1 / 4}>
              <Text p={2} color="white" bg="blue">
                1/4
              </Text>
            </Box>
            <Box px={2} py={2} width={1 / 4}>
              <Text p={2} color="white" bg="blue">
                1/4
              </Text>
            </Box>
            <Box px={2} py={2} width={1 / 4}>
              <Text p={2} color="white" bg="blue">
                1/4
              </Text>
            </Box>
            <Box px={2} py={2} width={1 / 4}>
              <Text p={2} color="white" bg="blue">
                1/4
              </Text>
            </Box>
            <Box px={2} py={2} width={[1, 4 / 5]}>
              <Text p={2} color="white" bg="tomato">
                4/5
              </Text>
            </Box>
            <Box px={2} py={2} width={[1, 1 / 5]}>
              <Text p={2} color="white" bg="tomato">
                1/5
              </Text>
            </Box>
          </Flex>

          <Button>I am a Button!</Button>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
