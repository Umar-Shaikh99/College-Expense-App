module.exports = {
    presets: ["module:@react-native/babel-preset", "nativewind/babel"],
    plugins: [
        ["module-resolver", {
            root: ["./src"],
            alias: {
                "@components": "./src/components",
                "@config": "./src/config",
                "@modules": "./src/modules",
                "@navigation": "./src/navigation",
                "@services": "./src/services",
                "@store": "./src/store",
                "@utils": "./src/utils",
                "@types": "./src/utils/types",
                "@src": "./src",
            },
        }, ], 'react-native-reanimated/plugin'
    ],
};