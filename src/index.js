const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://amartya36:9WTUtifh9qoYUBZc@amartyaproject.gciwubl.mongodb.net/?retryWrites=true&w=majority"   ,{useNewUrlParser:true})
.then( ()=>console.log("MongoDp is connected"))
.catch(err=> console.log(err))

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
