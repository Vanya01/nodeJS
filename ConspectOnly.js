


// const newUser = require(`./CreateUser`)
//
// newUser.CreateUser('Vanya',19)
// console.log(newUser)



// library
// const fs = require('fs')
// library
// const path = require('path') // this was created for work with different ways were files can be located


// const appendFilePath = path.join(__dirname,'files','textHere') //it is create the way without /



// console.log(appendFilePath)
//
// const mkdirPath = path.join(__dirname,'files','textHere')

// fs.mkdir(mkdirPath,{recursive:true},(e)=>{
//     console.log(e)
// }) // create new directory and option - true -  will create directory which uncreated



// fs.stat() - return statistic of the file ( which contains inside )
// fs.stat ( appendFilePath,(err,stats) => {
//     console.log(stats)
// })

// fs.rmdir ( way here ) - it could delete the directory


// fs.unlink(appendFilePath,err => {
//     console.log(err)
// }) // if want to delete


// fs.rename - can move files to different folders

// fs.rename(
//     appendFilePath,
//     path.join(mkdirPath,'newFile.txt',(err)=>{
//         console.log(err)
//     }) // connect with previous created way to folder
//     )
//


//how to read the file
// fs.readFile(`${__dirname}/files/textHere`,((err,data)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//
//     console.log(data.toString())
// }))
// how to read the file


//rewriting of current text file
// fs.writeFile(`${__dirname}/files/textHere`, 'Some new text',(err => {
//     console.log(err)
// }))
//rewriting of current text file



// this code will update current file as much as I want \n will create each text from the new line
// fs.writeFile(`${__dirname}/files/textHere`, 'Some new text maaaany times \n',(err => {
//     console.log(err)
// }))

// this code will update current file as much as I want and \n will create each text from the new line

// console.log(__dirname)
// console.log(__filename)


// const CreateUser = (name,age)=>{
//     return{
//         name,
//         age,
//         greeting:()=>{
//             console.log(`Hi ${name}`)
//         }
//     }
// }
//
//
// module.exports = {
//     CreateUser
// }



// __filename - the same, but shows were this variable running example - G:\react-1ls\nodeJS\app.js
// __dirname - is a global variable.It shows were located my file (which I will run ) example - G:\react-1ls\nodeJS





///////////////////////////////////////////////lesson 2 ///////////////////////////////////////////////////////


// first of all should to install the library 'express' - npm i express
// then import this library to the project by command -
// const express = require('express'); // then i should call to the library like a function
// const app = express()
// app.listen(5000,()={
//     console.log(`Some text/host name`)
//     }
// )

// http requests - post put delete get connect other are useless

// for example to get smth  - app.get('/',(req,resp)=>{   //req - info from the client could be a costumer or front-end inf
//                                res.json('some text');


                                                           // res - what we sent to the front end developer
                                                           // when sent some info sent like res.json()
//
//
//
// }) //  /-is home page,













