//1-
const urls = [
    "https://jsonpaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  
  const getData = async function () {
    try {
      const [users, posts, albums] = await Promise.all(
        urls.map(async (url) => { 
  
          const response = await fetch(url);
          const data = await response.json();
          return data;
        })
      );
  
      console.log("users", users);
      console.log("posts", posts); 
      console.log("albums", albums);
    } catch (error) {
      console.log(`ooooooops ${error}`);
    }
  };
  
  getData();
  
  //2-
  // ==CONCURRENT START with Promise.all==
  // starting slow promise
  // starting fast promise
  // fast promise is done
  // slow promise is done
  // slow
  // fast
  
  //3-
// ==PARALLEL with await Promise.all==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast

// 4- 
// ==PARALLEL with Promise.then==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow