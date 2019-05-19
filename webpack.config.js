const lib = 'commonjs2'

module.exports = {
  entry: "./src/index.ts",
  output: {
    libraryTarget: lib,
    path: __dirname + '/dist',
    filename: "ludic.ext.ui."+lib+".js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
}