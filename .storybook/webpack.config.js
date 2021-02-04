const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = async ({ config }) => {
    config.resolve = Object.assign(config.resolve, {
        alias: {
            '@components': resolve('../src/components'),
            '@constants': resolve('../src/constants'),
            '@utils': resolve('../src/constants/utils'),
            '@messages': resolve('../src/constants/messages'),
            '@styles': resolve('../src/styles'),
            '@pages': resolve('../src/pages'),
            '@data': resolve('../src/sampleData.ts'),
        },
    });

    return config;
};
