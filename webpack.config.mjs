import path from "path"
import {fileURLToPath} from "url"
import HtmlWebpackPlugin from "html-webpack-plugin"

const dirname = path.dirname(fileURLToPath(import.meta.url))
const getAbsPath = (relativePath) => path.resolve(dirname, relativePath)

const publicPath = "/"

export default {
  entry: {
    app: [getAbsPath("src/index")],
  },
  output: {
    filename: "[name].js",
    path: getAbsPath("dist"),
    publicPath,
  },
  target: "web",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".cjs", ".mjs", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|mjs|cjs|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    host: "0.0.0.0",
    hot: true,
    client: {
      overlay: true,
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    static: {
      directory: getAbsPath("dist"),
      publicPath,
    },
  },
}
