module.exports = {
    apps: [
        {
            name: 'msb-hub',
            script: 'build/app.js',
            args: '-r ts-node/register/transpile-only -r tsconfig-paths/register',
            env_production: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
        },
    ],
};
