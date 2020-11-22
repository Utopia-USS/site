import React from 'react';
import { Box, Container, CssBaseline } from '@material-ui/core';
import AppTheme from './AppTheme';
import { NavBar } from './components/nav-bar/NavBar';
import makeStyles from '@material-ui/core/styles/makeStyles';

function App() {
  return (
    <React.Fragment>
      <AppTheme>
        <React.Fragment>
        <CssBaseline />
        <NavBar/>
          <Container>
            <Box my={2}>
              {[...new Array(40)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
            </Box>
          </Container>
        </React.Fragment>
      </AppTheme>
    </React.Fragment>
  );
}

export default App;
