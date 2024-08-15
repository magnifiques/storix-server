module.exports = {
  apps: [
    {
      name: "storix",
      script: "yarn",
      args: "dev",
      env: {
        NODE_ENV: "development",
        ENV_VAR: "environment-variable",
      },
    },
  ],
};
