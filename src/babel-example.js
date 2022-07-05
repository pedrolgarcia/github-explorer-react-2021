// O babel é um compilador de código JS.
// Converte para um código legível para os browsers.

const user = {
  name: "Pedro"
}

console.log(user.address?.street)

// yarn babel src/babel-example.js --out-file dist/babel-example.js