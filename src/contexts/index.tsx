import { QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

import { queryClient } from '@services';
import { PropsWithRequiredChildren } from '@common/types';

import { AppThemeProvider } from './theme';
import { AuthProvider } from './auth';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </AppThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default AppProviders;
