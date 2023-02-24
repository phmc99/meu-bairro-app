import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </NavigationContainer>
    </React.Fragment>
  );
}
