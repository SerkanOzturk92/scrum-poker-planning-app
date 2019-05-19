const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoriesDataSchema = new Schema(
    {
        id: Number,
        sprintId: Number,
        storyName: String,
        status: String,
        finalScore: Number
    },
    { timestamps: true }
);
module.exports = mongoose.model("StoriesData", StoriesDataSchema);
