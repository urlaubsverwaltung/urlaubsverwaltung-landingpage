const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCSS(
	withPurgeCss({
		env: {
			CONTENT_HOST: "http://localhost:3000",
		},
		assetPrefix: process.env.ASSET_PREFIX || "",
	}),
);
