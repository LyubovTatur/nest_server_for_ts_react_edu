import {ObjectId} from "mongoose";

export class CreateCommentDto{
    readonly user:string ;
    readonly text:string;
    readonly track_id:ObjectId;

}