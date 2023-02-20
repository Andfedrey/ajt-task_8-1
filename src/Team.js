export default class Team {
  constructor() {
    this.member = new Set();
  }

  addHero(hero) {
    try {
      this.member.add(hero);
    } catch (error) {
      throw new Error('Вы можете добавить только одного персонажа');
    }
  }

  addAllHeros() {
    try {
      this.member.add(...[this.arguments]);
    } catch (error) {
      throw new Error('Вы можете добавить нескольких персонажей персонажа, в формате объекта');
    }
  }

  toArray() {
    this.member = [...this.member];
  }
}
