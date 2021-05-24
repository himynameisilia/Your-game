import mongoose from 'mongoose'
import QuestionTypes from '../models/question.js'

let anton = `Вопросы 

Это швейцарское национальное блюдо готовится из жирного сыра, часто с таким же названием, путем соскребания медленно плавящегося сыра : Раклет

В Греции их называли «отцом трагедии» и «отцом комедии» : Эсхил и Аристофан

Какое русское выражение происходит от названия бельгийского города Мехелен — известного центра колокольного литья и колокольной музыки? : Малиновый звон

Какой композитор использовал для общения со знакомыми так называемые разговорные тетради? : Бетховен

Какой драгоценный камень на Руси называли «синим Яхонтом»? : Сапфир

Название какой обуви, в переводе с французского, означают «крепкие сапоги»? : Ботфорты`.split('\n\n')

mongoose.connect('mongodb://127.0.0.1:27017/Game', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, () => {
  console.log('connected to db')
})

let packObj = {
  theme: '',
  questions: []
}
let points = [0,200,400,600,800,1000,1200]

anton.forEach((el, i) => {
  packObj.theme = el[0]
  if (i > 0){
    let x = el.split(":")
    packObj.questions.push({
      question: x[0],
      answer: x[1],
      cost: points[i]
    })

  }
})
async function seed (){
  let x = await QuestionTypes.create(packObj)
}
seed()
