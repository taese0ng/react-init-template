const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: argv.mode || "development",
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      publicPath: "/", // webpack-dev-server에서 빌드한 파일을 서빙할 경로
    },
    target: ["web", "es6"],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          // TerserPlugin: JS 파일을 난독화하는 플러그인
          terserOptions: {
            // 난독화 옵션
            mangle: isProduction, // 변수 이름 변경
            compress: {
              drop_console: isProduction, // 콘솔 로그 제거
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: [/(node_modules)/, /\.spec\.(ts|tsx)$/],
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        // 이미지 로더
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "assets/images/[name].[hash:8].[ext]",
              },
            },
          ],
        },
        // SVG 로더
        {
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        },
        // 웹폰트 로더
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/fonts/[name].[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      plugins: [new TsconfigPathsPlugin()], // tsconfig.json의 paths를 사용하기 위한 플러그인
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      client: {
        overlay: {
          errors: true,
          warnings: false,
          runtimeErrors: true,
        },
      },
      port: 9000,
      hot: true,
      open: true,
      historyApiFallback: true, // dev server에서 라우팅을 사용하기 위한 설정
    },
    // 터미널에 출력되는 정보를 커스터마이징.
    stats: {
      builtAt: true,
      errors: true,
      errorDetails: true,
      assets: false,
      chunks: false,
      colors: false,
      hash: false,
      modules: false,
      performance: true,
      version: true,
      warnings: true,
    },
  };
};
