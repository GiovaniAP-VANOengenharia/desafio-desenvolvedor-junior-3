import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import { AppContainer } from './style';
import theme from '../styles/theme';


export default function() {
  return(
    <NavigationContainer>
      <ThemeProvider theme={ theme }>
        <GlobalStyles />
        <AppContainer>
          <Stack />
        </AppContainer>
      </ThemeProvider>
    </NavigationContainer>
  )
}