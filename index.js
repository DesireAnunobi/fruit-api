require('dotenv').config()
const app = require("./app")
const port = process.env.PORT
// const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});