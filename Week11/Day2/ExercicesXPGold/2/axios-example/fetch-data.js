const axios = require("axios");


function titlePost () {

    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then(function (response) {
        const posts = response.data;
        return posts;
      })
      .then(function (posts) {
        posts.forEach(function (post) {
          console.log(post.title);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
}

module.exports = titlePost