import * as webpack from "webpack";
import { merge } from "webpack-merge";
import TerserPlugin from "terser-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import { default as commonConfig } from "./common.config";

const config: webpack.Configuration = merge(commonConfig, {
  mode: "production",
  devtool: false,
  output: {
    publicPath: "/whiteboxcryptography/",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin(), ...commonConfig.plugins],
});

export default config;
