import mongoose from 'mongoose'

const QuestionTypes = new mongoose.Schema({
  theme: String,
  questions: [{ type: Object }]
})

export default mongoose.model("QuestionType", QuestionTypes);

