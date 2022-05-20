import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid'
import { createHmac } from 'crypto'
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number, 
        default: 0
    }
}, { timestamps: true })


// userSchema.methods = {
//     //method
//     authenticate(password){
//         return this.password == this.encrytPassword(password);
//     },
//     //method
//     encrytPassword(password){
//         if(!password) return;
//         try {
//             return createHmac('sha256', this.salt).update(password).digest('hex')
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

//middleware
// userSchema.pre("save", async function save(next){
//     try {
//         this.salt = uuidv4();
//         console.log('salt', salt)
//         this.password = this.encrytPassword(this.password)
//         next()
//     } catch (error) {
//         return next(error)
//     }
// })

userSchema.methods = {
    authenticate(password){
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password){ 
        if(!password) return;
        try {
            console.log('password da ma hoa', createHmac('sha256', this.salt).update(password).digest('hex'))
            return createHmac('sha256', this.salt).update(password).digest('hex');
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function(next){
        this.salt = uuidv4();
        this.password = this.encrytPassword(this.password);
        next()
})
export default mongoose.model("User", userSchema)