const userRepository = require("../repository/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Generate a refresh token
const generateRefreshToken = (user) => {
    return jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );
  };

//Register a new user
exports.register = async (username,email,password,role) => {
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const existingUser = await userRepository.checkUserExists(email);
        if(existingUser){
            throw new Error("User already exists");
        }
        const refreshToken = generateRefreshToken(user);
        const user = await userRepository.createUser({username,email,password:hashedPassword,role,refreshToken});
        return user;
    }catch(error){
        throw error;
    }
}
//Login a user
exports.login = async (email,password) => {
    try{
        const user = await userRepository.getUserbyEmail(email);
        if(!user){
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            throw new Error("Invalid password");
        }
        const refreshToken = generateRefreshToken(user);
        return {accessToken,refreshToken};
    }catch(error){
        throw error;
    }
}

//Refresh a token
exports.refreshToken = async (refreshToken) => {
    try{
        const decoded = jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET);
        const user = await userRepository.getUserbyId(decoded.id);
        if(!user){
            throw new Error("User not found");
        }
        const accessToken = generateAccessToken(user);
        return {accessToken};
    }catch(error){
        throw error;
    }
}

//Logout a user
exports.logout = async (refreshToken) => {
    try{
        const decoded = jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET);
        const user = await userRepository.getUserbyId(decoded.id);
        if(!user){
            throw new Error("User not found");
        }
        return {message:"Logged out successfully"};
    }catch(error){
        throw error;
    }
}