module.exports = {
  entry: "./app/App.js",

  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: /app/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: "eval-source-map"
};
