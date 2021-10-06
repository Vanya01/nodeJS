const db = require('../Data base/usersDataBase.json');
const path = require('path');
const fs = require('fs');
const usersWay = path.join('Data base', 'usersDataBase.json');

module.exports = {
    getUsers: ((req, res) => {
        fs.readFile(usersWay, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let gotUsers = JSON.parse(data.toString());
                    res.json(gotUsers);
            }
        })
    }),

    createUser: ((req, res) => {

        fs.readFile(usersWay,(err, data) => {
            if(err){
                console.log(err)
            }else{
                let usersHere = JSON.parse(data.toString());
                usersHere.push({...req.body, id: db.length + 1});
                res.json({...req.body,id: usersHere.length + 1});
                fs.writeFile(path.join(usersWay), JSON.stringify(usersHere), (err)=>{
                    if (err){
                        console.log(err);
                    }
                })
            }
        })
    }),

    getUsersById: ((req,res)=>{
        fs.readFile(usersWay,((err, data) => {
            if(err){
                console.log(err);
            }else{
                let specialUser = JSON.parse(data.toString());
                let {user_id} = req.params;
                let newUser = specialUser[user_id - 1];
                res.json(newUser);
            }
        }))
    }),

    deleteUsers: ((req,res)=>{
    fs.readFile(usersWay,((err, data) => {
        if(err){
            console.log(err);
        }else {
            let userCheck = JSON.parse(data.toString());
            let {user_id} = req.params;
            let filteredUser = userCheck.filter(user => user.id !== +user_id);
            fs.writeFile(usersWay,JSON.stringify(filteredUser),(err)=>{
                console.log(err);
            });
            res.json(filteredUser);
        }
    }));
    })
};





