module.exports = {
    apps: [
        {
            name: 'msb-hub',
            script: './build/app.js',
            /* node_args: '-r ts-node/register/transpile-only -r tsconfig-paths/register', */
            instances: -1
        },
    ],
};
