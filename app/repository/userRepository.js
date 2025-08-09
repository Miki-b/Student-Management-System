const User = require("../model/User");

class UserRepository{
    //Register new user
    async createUser ({username,email,password,role,refreshToken})  {
        try{
            const user= await User.create({username,email,password,role,refreshToken});
            return user
        }catch(error){
                throw error;
        }
    }
    //Check if user exists
    async checkUserExists (email)  {
        try{
            const user= await User.findOne({email});
            return user
        }catch(error){
            throw error;
        }
    }

    
    //get a user by email
    async getUserbyEmail (email)  {
        try{
            const user= await User.findOne({email});
            return user
        }catch(error){
            throw error;
        }
    }
    
}

module.exports = new UserRepository()