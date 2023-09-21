import axios from 'axios';

function fetch () {

    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}

export default fetch