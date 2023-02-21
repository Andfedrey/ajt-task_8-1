export default class ErrorRepository {
  constructor() {
    this.collection = new Map();
  }

  translate(errorKey) {
    return this.collection.has(errorKey) ? this.collection.get(errorKey) : 'Unknown error'
  }
}
