import mongoose,{ Schema } from "mongoose";
import IFeed from "../interface/IFeed";

const FeedSchema: Schema = new Schema({
    title: {
        type:  String,
        required: true
    },
    feed: {
        type: String,
        required: true
    },
}, 
    {timestamps: true}
);



export default mongoose.model<IFeed>('Feed', FeedSchema);