const express = require('express');
const status = require('http-status');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const PORT = process.env.PORT || 8080;

var users = [{id:1,name:"Andy", age:25},
    {id:2,name:"Naomi", age:27},
    {id:3,name:"Test", age:28}];

app.use(bodyParser.json());

app.get('/api/users',(req,res) => {
    res.status(status.OK).json(users);
});

app.get('/api/user/:id',(req,res)=>{
   
    let user = users[parseInt(req.params.id) -1];

    res.status(status.OK).json(user);

})

app.post('/api/user',(req,res)=>{

    var user = req.body;
    user["id"] = parseInt(users.length) + 1;

    users = _.concat(users, user);

    res.status(status.OK).json({
        status: "SUCCESS",
        ...user
    });

});


app.listen(PORT, () => {
    console.log(`SEVER RUNNING AT PORT ${PORT}`);
})

