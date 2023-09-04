if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}

// a. config 폴더 > dev.js (개발환경에서 설정할 것)
// b. config 폴더 > prod.js (배포환경에서 설정할 것)
// c. config 폴더 > key.js (환경변수가 개발환경인지 배포환경인지에 따라 실행시킬 if문 삽입)
