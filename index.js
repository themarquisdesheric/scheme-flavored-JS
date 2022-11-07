const adder = ([first, ...rest]) =>
  !first
    ? 0
    : first + adder(rest)

console.log(
  adder([1, 2, 3, 4, 5])
)

// 15

const length = ([first, ...rest]) =>
  !first
    ? 0
    : 1 + length(rest)

console.log(
  length([1, 2, 3, 4, 5])
)

// 5

console.log(
  length('this is a string')
)

// 16

const multiply = (n, m) =>
  m === 0
    ? m
    : n + multiply(n, m - 1)

console.log(
  multiply(2, 12)
)

// 24

const greaterThan = (n, m) =>
  (n === 0)
    ? false
    : (m === 0)
      ? true
      : greaterThan(
        n - 1,
        m - 1
      )

console.log(
  greaterThan(5, 5)
)

// false

const iterate = ([first, ...rest]) =>
  !first
    ? []
    : [first].concat(iterate(rest))

console.log(
  iterate(['this', 'is', 'a', 'sentence'])
)

// ['this', 'is', 'a', 'sentence']

const removeItem = ([first, ...rest], searchTerm) =>
  !first
    ? []
    : (first === searchTerm)
      ? removeItem(rest)
      : [first].concat(removeItem(rest, searchTerm))

console.log(
  removeItem(['this', 'is', 'another', 'bad', 'sentence'], 'bad')
)

// ['this', 'is', 'another', 'sentence']

/* occur searches arrays (including nested ones) for an occurrence of `searchTerm` and returns true if found */
const occur = ([first, ...rest], searchTerm) =>
  !first
    ? false
    : (first === searchTerm)
      ? true
      : (Array.isArray(first))
        ? occur(first, searchTerm) || occur(rest, searchTerm)
        : occur(rest, searchTerm)

console.log(
  occur(['here', 'is', 'a', ['nested', ['list', ['containing', ['the', ['search_term']]]]], 'sentence'], 'search_term')
)

// true
