export default class ErrorRepository {
  constructor() {
    this.collection = new Map();
  }

  generateNewError(key, value) {
    this.collection.set(key, value)
  }

  translate(errorKey) {
    return this.collection.has(errorKey) ? this.collection.get(errorKey) : 'Unknown error'
  }
}