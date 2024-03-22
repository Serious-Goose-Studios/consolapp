import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.seriousgoosestudios.consolapp',
  appName: 'ConsolApp',
  webDir: 'build',
  server: {
    androidScheme: 'https',
  }
};

export default config;
