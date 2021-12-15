module.exports = async () => {
  const Tweet = require("./models/Tweet");
  const User = require("./models/Users");

  User.hasMany(Tweet, { as: "tweets", foreignKey: "userId" });
  Tweet.belongsto(User, { as: "User", foreignKey: "userId" });

  const errHandler = (err) => {
    console.log("Error:", err);
  };
  const user = await User.create({
    username: "afaque",
    password: "123456789",
  }).catch(errHandler);
  const tweet = await Tweet.create({
    content: "This is tweet content tweeted from me",
    userId: user.id,
  }).catch(errHandler);

  const users = await User.findAll({
    where: { username: "afaque" },
    include: [{ model: Tweet, as: "Tweets" }],
  }).catch(errHandler);
  console.log("My tweets:", users);
};
