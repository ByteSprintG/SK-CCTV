import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Allow Google user profile images
  },
  webpack: (config, { isServer }) => {
    // Suppress warnings for optional TypeORM dependencies
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { module: /node_modules\/typeorm/ },
    ];

    // Ignore optional dependencies that TypeORM tries to load
    if (isServer) {
      config.externals = [
        ...(typeof config.externals === 'function'
          ? [config.externals]
          : Array.isArray(config.externals)
          ? config.externals
          : []),
        {
          'react-native-sqlite-storage': 'react-native-sqlite-storage',
          '@sap/hana-client': '@sap/hana-client',
          'mysql': 'mysql',
          'mysql2': 'mysql2',
          'oracledb': 'oracledb',
          'pg': 'pg',
          'pg-native': 'pg-native',
          'sqlite': 'sqlite',
          'sqlite3': 'sqlite3',
        },
      ];
    }

    return config;
  },
};

export default nextConfig;
