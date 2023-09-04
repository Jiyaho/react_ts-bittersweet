module.exports = {
  mongoURI: process.env.MONGO_URI,
};

// MONGO_URI는 heroku 같은 서비스를 이용할 경우,
// 해당 웹사이트에서 요구하는 process.env의 key를 MONGO_URI로 같게 맞춰주면 된다.
