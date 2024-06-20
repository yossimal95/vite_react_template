const config = {
    // ...
};

const levelConfig = {
    LOCAL: 'LOCAL',
    DEV: 'DEV',
};

export default {
    ...config,
    levalConfig: levelConfig[VITE_LEVEL]
};
