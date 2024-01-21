import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.beyond.app',
  appName: 'jobsearchapp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
