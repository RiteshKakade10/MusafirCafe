import express from "express";

const app = express();
const port = 3333;
app.use(express.json());


let users=[
    {id:1,name:"Ritesh",email:"ritesh.kakade@gmail.com"},
    {id:1,name:"Rohan",email:"rohan.kakade@gmail.com"},
    {id:1,name:"Rahul",email:"rahul.kakade@gmail.com"}
]
app.get("/", (req, res) => {
    res.send("Backend is running");
})


app.get("/users", (req, res) => {
    res.send(users);
})

// app.get("/Users/:Id",(req,res)=>{
//     console.log(req.params.Id);
//     res.send(`Your Requested ID Is:${req.params.Id}`);
// })

//Query String
app.get("/users/search",(req,res)=>{
    res.send(req.query);
    console.log();
})

app.post("/api/users", (req, res) => {
    const {id,name,email}=req.body();

    if(!id || !name || !email){
        res.send("Please Enter a details");
    }

    const newUser={
        id:id,
        name:name,
        email:email,
    }

    users.push(newUser);
})


app.get("/abc", (req, res) => {
    res.links({ next: '[http://api.example.com/users?page=2](http://api.example.com/users?page=2)', last: '[http://api.example.com/users?page=5](http://api.example.com/users?page=5)' })
})


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})