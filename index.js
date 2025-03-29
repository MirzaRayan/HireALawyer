import { ConnectDB } from "./src/db/index.js";
import app from "./app.js";

ConnectDB().then(() => {
    app.listen(process.env.PORT,() => {
        console.log(`Server is running on PORT:${process.env.PORT}`);
    })
}).catch(() => {
    console.log('error occured');
})




