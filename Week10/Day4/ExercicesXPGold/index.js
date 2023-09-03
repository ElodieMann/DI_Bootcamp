//1-
// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done -- after 2 sec
// slow -- after because in sequentialStart() the log is for the promise
// starting fast promise
// fast promise is done -- after a second
// fast -- after because in sequentialStart() the log is for the promise

// 2-
// ==CONCURRENT START with await== after 4 sec
// starting slow promise
// starting fast promise
// fast promise is done - after 1 sec
// slow promise is done - after 2 sec
// slow
// fast

// 3-
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  
  const getData = async function () {
    const [users, posts, albums] = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      })
    );
  
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  };
  getData();