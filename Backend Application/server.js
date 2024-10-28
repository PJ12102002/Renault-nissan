const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser=require('body-parser')
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
  host : 'localhost',
  user: 'root',
  password : 'Premaxen1210',
  database:'nodereact'
  });

  db.connect((err)=>{
    if(err) throw err;
    console.log('Connected to nodereact database..');
  });

  //crud operation
  app.get('/users',(req,res)=>{
    db.query('SELECT * FROM user',(err,results)=>{
      if(err) throw err;
      res.json(results);
    });
  });
  app.post('/users',(req,res)=>{
    const user = req.body;
    db.query('INSERT INTO user SET ?', user,(err,result)=>{
      if(err) throw err;
      res.json({id:result.insertId, ...user});
    });
  });

  app.listen(port,() =>{
    console.log(`Server is running at http://localhost:${port}`);
  });
  