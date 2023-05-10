const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
// create schema model
const UserSchema = new Schema({
    nom : String,
    prenom : String,
    age : Number
    // age , dateNaissance , ... 
});
const User = mongoose.model("User",UserSchema);
module.exports = User;