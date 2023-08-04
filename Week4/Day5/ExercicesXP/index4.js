let allBooks = [
  {
    title: "Harry Potter",
    author: "JKRolling",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: " JRR Tolkien",
    image:
      "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
    alreadyRead: false,
  },
];

const table = document.createElement("TABLE");
document.querySelector("div").appendChild(table);
let row = document.createElement("tr");
table.appendChild(row);
let row2 = document.createElement("tr");
table.appendChild(row2);
for (let book in allBooks) {
  let th = document.createElement("td");
  row.appendChild(th);
  th.textContent = `${allBooks[book].title} written by ${allBooks[book].author}`;

  let td = document.createElement("td");
  row2.appendChild(td);
  let img = document.createElement("img");
  img.src = allBooks[book].image;
  img.style.height = "100px";
  td.appendChild(img);

  if (allBooks[book].alreadyRead) {
    th.style.backgroundColor = "red";
  }
}
