
module.exports = import("@angular/compiler-cli/linker/babel").then(({ default: linkerPlugin }) => ({
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/, 
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.[cm]?js$/,
				resolve: {
					fullySpecified: false,
				},
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
						compact: false,
						plugins: [linkerPlugin],
					},
				},
			},
		],
	},
	devtool: false,
}));
