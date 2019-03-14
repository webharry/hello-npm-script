const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) =>{
    let abc = argv.abc;
    console.log(111,argv.abc);
    return {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist")
        },
        devServer: {
            contentBase: "./dist"
        },
        plugins: [
            new webpack.DefinePlugin({
                ABC: JSON.stringify(abc)
            })
        ]
    };
};
