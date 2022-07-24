const express = require("express");
const fs = require("fs");
const harsh = express();
const path = require("path");
const port = 80;



//harsh.use('/static', express.static('static'));
harsh.use(express.urlencoded())

harsh.set('view engine', 'pug');
harsh.set('views', path.join(__dirname, 'views'));

//harsh.get("/",(req,res) => {
//  res.status(200).render('f',{ title: 'harsh' , message: 'i am harsh vekariya and i know how to apply visa online'});
//})
harsh.get("/home", (req, res) => {
    res.render('index.pug');
})
harsh.post("/home", (req, res) => {
    console.log(req.body)
    let name = req.body.userid
    let pass = req.body.password
    let output = `username : ${name} , password : ${pass}`
    fs.writeFileSync('output.txt', output)
    const done = { 'message': 'sucessfully submited' }
    res.render('f', done)

})
harsh.listen(port, () => {
    console.log(`the link is localhost:${port}`);
})
