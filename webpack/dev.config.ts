import * as webpack from "webpack";
import { merge } from "webpack-merge";

import { default as commonConfig } from "./common.config";

const config: webpack.Configuration = merge(commonConfig, {
  mode: "development",
  optimization: {
    minimize: false,
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
  },
});

export default config;
