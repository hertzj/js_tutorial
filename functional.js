let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// Returns a URL-friendly version of a string
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//urls: imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls
}
console.log(imperativeUrls(states));
//urls: functional version
// function functionalUrls(elements) {
//   return elements.map(function(state) {return state.toLowerCase().split(/\s+/).join("-")});
// }
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function fullUrls(elements) {
  return elements.map(element => "https://example.com/" + element);
}
console.log(fullUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  })
  return singles;
}
console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// returning dakotas
function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubles(states));

function dakotas(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(dakotas(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total
}
console.log(imperativeSum(numbers))

// sum: functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total +=n});
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lenghts: functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, state) => {
                          lengths[state] = state.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// products: functional solution
let num = [1, 2, 3];
function functionalProducts(elements) {
  return elements.reduce((total, n) => {return total *=n});
}
console.log(functionalProducts(num));
