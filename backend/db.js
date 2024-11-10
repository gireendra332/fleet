const mongoose = require("mongoose");   
const mongoURI =
  "mongodb+srv://goofood:12345@cluster0.p1sbhrk.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: ture },
    async (err, result) => {
      if (err) console.log("----", err);
      else {
        console.log("connected");
        const fetched_data=await mongoose.Connection.db.collection0("food_items")
        fetched_data.find({}).toArray(function(err,data){
          if(err) console.log(err);
          else console.log(data);
        })
      }
    }
  );
};
module.exports = {mongoDB};
