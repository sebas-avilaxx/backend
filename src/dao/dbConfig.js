import mongoose from "mongoose"

const URI ="mongodb+srv://tadeoavilaxx10:Anselmo40@cluster0.u0dxaam.mongodb.net/cerveza?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")


