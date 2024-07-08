import express from 'express'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const port=process.env.APP_PORT || 8000
app.listen(port,()=>{
 console.log(`Server is running on PORT ${port}....`)
})