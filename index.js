import express from 'express'

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req,res) => {
    res.send('Hello world')
})

app.get('/about',(req,res) =>{
    res.send('About page')
})

app.get('/dashbord',(req,res) =>{
    res.send('Dashbord Page')
})

const users = [
    {id : 1, name : "md adnan", gamil : 'adnan@gmail.com'},
    {id : 2, name : "erin", gamil : 'erin@gmail.com'},
    {id : 3, name : "hossen", gamil : 'hossen@gmail.com'},
    {id : 4, name : "md adnan hossen", gamil : 'mdadnan@gmail.com'}
]

app.get('/users',(req,res) =>{
    res.send(users)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});