const getBuiltInPlugins = (userConfig) => {
  // built-in plugins for icejs
  const builtInPlugins = [
    require.resolve('build-plugin-ice-core'),
    require.resolve('build-plugin-react-app'),
    require.resolve('build-plugin-ice-router'),
    require.resolve('build-plugin-ice-helpers'),
    require.resolve('build-plugin-ice-logger'),
    require.resolve('build-plugin-ice-config'),
    require.resolve('build-plugin-ice-request'),
    require.resolve('build-plugin-ice-mpa')
  ];

  if (userConfig.ssr) {
    builtInPlugins.push(require.resolve('build-plugin-ice-ssr'));
  }

  if (!Object.prototype.hasOwnProperty.call(userConfig, 'store') || userConfig.store !== false) {
    builtInPlugins.push(require.resolve('build-plugin-ice-store'));
  }

  return builtInPlugins;
};

export = getBuiltInPlugins
