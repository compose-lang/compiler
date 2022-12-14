import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false,
            path: false
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: "module"
        }
    },
    devtool: "source-map",
    experiments: {
        outputModule: true
    },
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },

}

export default config;

