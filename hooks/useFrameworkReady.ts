import { useEffect } from 'react';
import { Platform } from 'react-native';
const { getDefaultConfig } = require('expo/metro-config');

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

const config = getDefaultConfig(__dirname);

// Add web support
config.resolver.platforms = ['ios', 'android', 'web'];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [],
  };
};

export function useFrameworkReady() {
  useEffect(() => {
    // Only call frameworkReady on web platform
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      window.frameworkReady?.();
    }
  }, []);
}
