if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [
      require("cssnano")
      // More postCSS modules here if needed
    ]
  };
}
