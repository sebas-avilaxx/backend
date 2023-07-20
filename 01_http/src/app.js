import express from "express";
import index from "./index.js";
const manager = new index("../files/products.json");
const app = express();
const port = 1765;


app.set("json spaces", 2);
app.use(express.json());

app.get("/products",async(req,res)=>{
    const {limit}=req.query
    const products= await manager.getProducts()
    if(limit){
     const limitproducts=products.slice(0,limit)
     res.json({status:"Success",limitproducts})

    }
    else{
        res.json({status:"Success",products})
    }
})

app.get("/products/:pid",async(req,res)=>{
    
    const {pid}=req.params

    const products= await manager.getProducts()
    const productfind=products.find(elemento=>elemento.id===parseInt(pid))
    console.log(productfind)
    res.send({status:"success",productfind})
})

app.listen(port, () => {
  console.log("server is working");
});
