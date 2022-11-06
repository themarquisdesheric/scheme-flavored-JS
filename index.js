const adder = ([first, ...rest]) => {
  if (!first) return 0
  
  return first + adder(rest)
}

console.log(
  adder([1, 2, 3, 4, 5])
)

// 15

const length = ([first, ...rest]) => {
  if (!first) return 0

  return 1 + length(rest)
}

console.log(
  length([1, 2, 3, 4, 5])
)

// 5

console.log(
  length('this is a string')
)

// 16

const multiply = (n, m) => {
  if (m === 0) return m

  return n + multiply(n, m - 1)
}

console.log(
  multiply(2, 12)
)

// 24

const greaterThan = (n, m) => {
  if (n === 0) return false
  if (m === 0) return true

  return greaterThan(n - 1, m - 1)
}

console.log(
  greaterThan(1, 5)
)

// false

const iterate = ([first, ...rest]) => {
  if (!first) return []

  return [first].concat(iterate(rest))
}

console.log(
  iterate(['this', 'is', 'a', 'sentence'])
)

// ['this', 'is', 'a', 'sentence']

const removeItem = ([first, ...rest], searchTerm) => {
  if (!first) return []

  if (first === searchTerm) {
    return removeItem(rest)
  }

  return [first].concat(
    removeItem(rest, searchTerm)
  )
}

console.log(
  removeItem(['this', 'is', 'another', 'bad', 'sentence'], 'bad')
)

// ['this', 'is', 'another', 'sentence']
