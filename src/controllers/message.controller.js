export const sendMessage = async (req,res,next) =>{
    try {
        res.send("send Message");
    } catch (error) {
        
    }
};


export const getMessages = async (req,res,next) =>{
    try {
        res.send("get message")
    } catch (error) {
        
    }
};
