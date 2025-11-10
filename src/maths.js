/**
 * Maths Module
 * Collection of utility math functions
 */

export function add(a, b) {
  return a + b
}

export function subtract(a, b) {
  return a - b
}

export function multiply(a, b) {
  return a * b
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

export function square(n) {
  return n * n
}

export function sqrt(n) {
  if (n < 0) {
    throw new Error('Cannot compute square root of negative number')
  }
  return Math.sqrt(n)
}
