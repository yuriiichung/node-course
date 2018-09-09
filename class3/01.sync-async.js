/* eslint no-shadow: 0 */

const start = new Date();
let endPost = false,
  endBook = false;

function readABlogPost(done) {
  setTimeout(() => {
    done("Leí un lindo post!");
  }, 5000);
}

function readABook(done) {
  setTimeout(() => {
    done("Leí un lindo libro!");
  }, 3000);
}

function diffTime(time) {
  return parseInt(((new Date()) - time) / 1000, 10);
}

function pollUntilFinish(time) {
  setTimeout(() => {
    if (endPost && endBook) {
      console.log(`Tardó ${diffTime(time)} segundos.`);
    } else {
      pollUntilFinish(time);
    }
  }, 100);
}

console.log("Empieza secuencial:");

readABlogPost((res) => {
  console.log(res);

  readABook((res) => {
    console.log(res);

    console.log(`Tardó ${diffTime(start)} segundos.`);

    console.log("Ahora async:");

    readABlogPost((res) => {
      endPost = true;
      console.log(res);
    });
    
    readABook((res) => {
      endBook = true;
      console.log(res);
    });

    pollUntilFinish(new Date());
  });
});
