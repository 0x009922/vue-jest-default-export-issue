import { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': 'vue-jest',
    },
    globals: {
        'ts-jest': {
            diagnostics: false
        },
    },
    moduleFileExtensions: ['vue', 'js', 'jsx', 'ts', 'tsx'],
};

export default config;
