const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser'); 
const app = express();
const port = process.env.PORT || 5001

//////Express MiddleWares//////////////

const prodOrigin = "https://buildingu.github.io"

//Use for local development
// const devOrigin = "http://localhost:5173"

const corsOptions = {
  origin: prodOrigin,
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser());


const usersRouter = require('./Routes/User');
const feedbackRouter = require('./Routes/Feedback');
const passwordRouter =  require('./Routes/Password');

app.use('/api/users', usersRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/password', passwordRouter);

app.get('/',(req, res)=>{
  res.redirect('https://buildingu.github.io/Building-u-feedback/'); 
})


app.listen(port, ()=>{
    console.log(`HTTP Server listening on port ${port}`);
})
