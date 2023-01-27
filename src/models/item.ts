import {Schema, Types, model, Model} from "mongoose"
import { Item } from "../interface/Item.interface"

const ItemSchema = new Schema<Item>(
    {
        name:{
            type: "string",
            required:true,
        },
        type:{
            type: "string",
            enum:['back', "front"],
            required:true,
        },
        year:{
            type: "number",
            required:true,
        },
        description:{
            type: "string",
            required:true,
        },
        price:{
            type: "number",
            required:true,
        }
    
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const ItemModel = model('items', ItemSchema)
export default ItemModel