const PROXY_ENV_VARIABLES = ['HTTP_PROXY', 'HTTPS_PROXY', 'NO_PROXY'];


module.exports = function getProxySettings(env) {
  const proxySettings = [];
  for (const envVariableName of Object.keys(env || {})) {
    const envVariableValue = env[envVariableName];
    if (!Array.from(PROXY_ENV_VARIABLES).includes(envVariableName.toUpperCase())) { continue; }
    if (envVariableValue === '') { continue; }
    proxySettings.push(`${envVariableName}=${envVariableValue}`);
  }
  return proxySettings;
};
