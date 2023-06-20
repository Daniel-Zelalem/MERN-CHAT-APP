const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);

  try {
    const Con = await mongoose.connect(
      "mongodb+srv://Daniel-Zelalem:LZ9ei048jp2eg4dS@public-chat-app.tq9xx9x.mongodb.net/ZChat-db?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      `Successfully Connected To MongoDB: ${Con.connection.host}`.yellow.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
