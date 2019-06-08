const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const multer  = require('multer');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
const User = require('./User.js');
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware')
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
const commentDataSchema = new Schema({
  name: String,
  age: String,
  type: String,
  text: String,
  filename: String
}, {collection: 'comments'});

const postDataSchema = new Schema({
  title: String,
  text: String,
  tag: String,
  filename: String
}, {collection: 'posts'});


const CommentData = mongoose.model('UserData', commentDataSchema);
const PostData = mongoose.model('PostData', postDataSchema);
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({storage});

app.post('/contacts', upload.single('file'), (req, res, next) =>{
  if(!req.body) return res.sendStatus(400);
  let item = {
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
    text: req.body.text,
    filename: req.file.filename
  };

  let data = new CommentData(item);
  data.save();
})

app.post('/create-post', upload.single('file'), (req, res, next) =>{
  if(!req.body) return res.sendStatus(400);
  console.log(req.body);
  
  let item = {
    title: req.body.title,
    text: req.body.text,
    tag: req.body.tag,
    filename: req.file.filename
  };

  let data = new PostData(item);
  data.save();
})


// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   // res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({
//     greeting: `hui ${name}!`
//   }));
// });

// app.get('/contacts', (req, res) => {
//   // res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `hui!` }));
// });

app.get('/admin', (req, res) => {
  CommentData.find()
  .then(function(comments){
    res.json(comments);
  })
})



app.get('/posts', (req, res) =>{
  PostData.find()
  .then(function(posts){
    res.json(posts);
  })
});

app.get('/post/:id', (req, res) =>{
  // const id =  new objectId(req.params.id);
  const id = req.params.id;
  PostData.findById(id, function(err, post){
    if (err) return console.log(err);
    res.json(post);
  }); 
});
app.get('/post/edit/:id', (req, res) =>{
  // const id =  new objectId(req.params.id);
  const id = req.params.id;
  PostData.findById(id, function(err, post){
    if (err) return console.log(err);
    res.json(post);
  }); 
});
app.put('/post/edit/:id', upload.single('file'), function(req, res, next) {
  // const id =  new objectId(req.params.id);
  if(!req.body) return res.sendStatus(400);
  const id = req.params.id;
  let item = {
    title: req.body.title,
    text: req.body.text,
    filename: req.file.filename
  };

  PostData.findByIdAndUpdate(id, { $set: item}, { useFindAndModify: false }, function(err, post) {
    if (err) {console.error('error, no entry found')};
  });
  res.send('ok');
  // res.redirect(303, '/posts');
});

app.delete('/post/delete/:id', function(req, res){
  if(!req.body) return res.sendStatus(400);
  const id = req.params.id;  
  PostData.findByIdAndRemove(id, { useFindAndModify: false }, function(err){
    if (err) {console.error('error, no entry found')};
  });
})
// app.post('/posts', (req, res) =>{
//   console.log(req.method);
//   console.log(req.headers);
//   console.log(req.body);

//   res.end(); 
// })
app.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

app.post('/api/authenticate', function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});


app.listen(8080, () =>
  console.log('Express server is running on localhost:8080')
);