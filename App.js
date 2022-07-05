import React from "react";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
      </GestureHandlerRootView>
  );
}
