const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// ------ parse application/x-www-form-urlencoded --------
app.use(bodyParser.urlencoded({ extended: false }));

// ------ parse application/json ------
app.use(bodyParser.json());

app.use(cors());

getDateWithoutSec = (date) => {
    const dateAndTime = date.toISOString().split('T')
    const time = dateAndTime[1].split(':')
    return `${dateAndTime[0]} at ${time[0]} : ${time[1]}`
}
const database = {
    users: [
        {
            id:1,
            name:"John",
            email:"john@gmail.com",
            password:"qwerty",
            joined: getDateWithoutSec(new Date())
        },
        {
            id:2,
            name:"Ann",
            email:"ann@gmail.com",
            password:"qwerty",
            joined: getDateWithoutSec(new Date())
        }
    ]  
}

let id = 3;

app.get('/',(req,res) => {
   res.send(database.users)
})

app.post('/signin',(req,res) => {
    let found = false;
    database.users.forEach(user => {
        if(req.body.email === user.email && 
            req.body.password === user.password) {
            found = true
            return res.json(user);
        }
    })
    if(!found) {
        return res.status(400).json('Reject')
    }
})

app.post('/register',(req,res) => {
   const {email,name,password} = req.body;
   const newUser = {
       id:id++,
       email:email,
       name:name,
       password:password,
       joined:getDateWithoutSec(new Date())
   }
   database.users.push(newUser);
   return res.json(database.users[database.users.length -1]);
})

app.listen(3005,() => {
    console.log('server is running on 3005')
})


/*
----Planning Api----
 / -> GET -> res = return "working",
 /signin -> POST -> res = resolve/reject,
 /register -> POST -> res = return new user object
*/