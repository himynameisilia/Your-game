import routerObj from 'express';
const router = routerObj.Router();
import bcrypt from 'bcrypt-nodejs';
const salt = bcrypt.genSaltSync(10);
import mongoose from 'mongoose'
import QuestionTypes from '../models/question.js'

mongoose.connect("mongodb://localhost:27017/Game", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = new mongoose.model('User', {
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  games: Object,
})

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hasUser = await User.findOne({ email: email })
  if (hasUser) {
    res.status(400).json({ register: false })
  } else {
    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, salt)
    })
    req.session.user = user
    res.status(200).json(user)
  }

})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email })
  if (user && (bcrypt.compareSync(password, user.password))) {
    req.session.user = user
    res.status(200).json(user)
  }
})

router.get('/game', async (req, res) => {
  const quest = await QuestionTypes.find()
  console.log(quest);
  res.status(200).json(quest)
})


export default router;
