import { app } from "./app/app.js";
import "./app/db/mongoose.js";

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("server run " + PORT);
});
