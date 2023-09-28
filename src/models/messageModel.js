import mongoose from "mongoose";



const {ObjecId} = mongoose.Schema.Types;

const messageSchema = mongoose.Schema({
    sender: {
        type: ObjecId,
        ref: "UserModel",
    },
    message: {
        type: String,
        trim: true,
    },
    conversation: {
        type: ObjecId,
        ref: "ConversationModel",
    },
    files: [],
},
{
    collection: "messages",
    timestamps: true,
}
);


const MessageModel = 
    mongoose.models.MessageModel ||
    mongoose.model("MessageModel", messageSchema);

export default MessageModel;
