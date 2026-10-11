import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required for creating an account"],
        trim: true,
        unique: [true, "Email already exists, please use a different email"],
        lowercase: true,
        match: [
        /^[a-z0-9]+[._]?[a-z0-9]+@\w+\.\w{2,3}$/,
        "Please enter a valid email address"
        ]
    },
    name: {
        type: String,
        required: [true, "Name is required for creating an account"]
    },
    password: {
        type: String,
        required: [true, "Password is required for creating an account"],
        minlength: [6, "Password must be at least 6 characters long"],
        select: false
    },
    cartData: {
        type: Object,
        default: {}
    },
    systemUser: {
        type: Boolean,
        default: false,
        immutable: true,
        select: false
  }
},{
    minimize: false,
    timestamps: true
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;