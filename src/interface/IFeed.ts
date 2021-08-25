import { Document } from "mongoose";

export default interface IFeed extends Document {
    title: string;
    feed: string;
}