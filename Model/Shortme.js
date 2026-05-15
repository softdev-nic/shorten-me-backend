const mongoose = require('mongoose');
require('dotenv').config();
const ShortSchema = new mongoose.Schema({  
    ShortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    clicks:{
        type:Number,
        default:0
    }
});
const Shortlinks = mongoose.model('Shortlinks', ShortSchema);
module.exports = Shortlinks;