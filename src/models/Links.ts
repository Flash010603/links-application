import { Schema, model } from 'mongoose'

interface LinkType{
    uri:String;
    name:String;
    date:Number;
}

const linkSchema = new Schema<LinkType>({
    link: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    start:{
        type: Number,
        required: true
    }
});


linkSchema.method("toJSON", function(){

    const{ __v ,_id,...object }=this.toObject();
    
    object.id = _id;

    return object;
});



export default model<LinkType>('link',linkSchema);