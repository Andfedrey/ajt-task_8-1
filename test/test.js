import Team from "../src/Team";
import ErrorRepository from "../src/ErrorRepository"

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  it('should be initialized with an empty member set', () => {
    expect(team.member.size).toBe(0);
  });

  it('should add a single hero to the member set', () => {
    const hero = { name: 'Magic', power: 40 };
    team.addHero(hero);
    expect(team.member.size).toBe(1);
    expect(team.member.has(hero)).toBe(true);
  });

  it('should throw an error when adding more than one hero at once', () => {
    const hero1 = { name: 'Zombie', power: 10 };
    const hero2 = 12;

    try {
      team.addAllHeros(hero1, hero2);
    } catch (error) {
      expect(error.message).toBe('Вы можете добавить нескольких персонажей в формате объекта');
    }
  });


  it('should convert member set to an array', () => {
    const hero1 = { name: 'Swordman', power: 20 };
    const hero2 = { name: 'Demon', power: 30 };
    team.addHero(hero1);
    team.addHero(hero2);
    team.toArray();
    expect(Array.isArray(team.member)).toBe(true);
    expect(team.member).toEqual(expect.arrayContaining([hero1, hero2]));
  });
});


describe('ErrorRepository', () => {
  let errorRepository ;
  
  beforeEach(() => {
    errorRepository = new ErrorRepository();
    errorRepository.generateNewError('error1', 'Error 1');
    errorRepository.generateNewError('error2', 'Error 2');
  });

  test('translate returns the correct error message', () => {
    expect(errorRepository.translate('error1')).toBe('Error 1');
    expect(errorRepository.translate('error2')).toBe('Error 2');
  });

  test('translate returns the default message for unknown errors', () => {
    expect(errorRepository.translate('duck')).toEqual('Unknown error');
  });
});