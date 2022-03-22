import path from "path"
import {fileURLToPath} from "url"
import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const getAbsPath = (relativePath) => path.resolve(dirname, relativePath)

const publicPath = "/"

export default () => {
  process.env.NODE_ENV = "development"

  return {
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
    cache: {
      type: "filesystem"
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
    ],
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
}
