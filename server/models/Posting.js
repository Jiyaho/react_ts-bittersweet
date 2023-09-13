const mongoose = require('mongoose');

// 게시글 index number를 자동으로 증가시키며 생성하기 위한 Lib.
const AutoIncrement = require('mongoose-sequence')(mongoose);

const postingSchema = new mongoose.Schema({
  writer: {
    type: String,
    maxlength: 15,
    required: true,
  },
  title: {
    type: String,
    maxlength: 30,
    required: true,
  },
  content: {
    type: String,
    maxlength: 1000,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  view: {
    type: Number,
    default: 0,
  },
});

postingSchema.plugin(AutoIncrement, { inc_field: 'id' });

// 모델 생성
const Posting = mongoose.model('Posting', postingSchema);
module.exports = { Posting };
