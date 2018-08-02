const express = require("express");

require("dotenv").config();



const app = express();
app.listen(process.env.PORT, () => {
	console.log(`[Bouyomi For Mastodon] Server has been launched on PORT ${process.env.PORT}`);
});