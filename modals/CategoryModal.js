const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
  
},{
    timestamps: true,
});

module.exports = mongoose.model("Catgory", userSchema);

