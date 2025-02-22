import { Dev } from '../ref';
import { asList, Currency, Enum, Id, isList, List, Scope, toList, toObject } from '../../src';
import '@thisisagile/easy-test';

describe('List', () => {
  const devs = toList([Dev.Sander, Dev.Wouter, Dev.Jeroen, Dev.Naoufal]);

  test('asc and desc', () => {
    expect(devs.asc('name').last()).toMatchObject(Dev.Wouter);
    expect(devs.asc('name').first()).toMatchObject(Dev.Jeroen);
    expect(devs.desc(d => d.name).first()).toMatchObject(Dev.Wouter);
    expect(devs.desc(d => d.name).last()).toMatchObject(Dev.Jeroen);
  });

  test('map', () => {
    expect(devs.map(d => d.language)).toBeInstanceOf(List);
    expect(
      devs
        .asc('name')
        .map(d => d.name)
        .first()
    ).toBe(Dev.Jeroen.name);
  });

  test('mapDefined', () => {
    const devs = toList([Dev.Sander, Dev.Wouter, Dev.Jeroen, Dev.Invalid]).mapDefined(d => d.name);
    expect(devs).toBeInstanceOf(List);
    expect(devs).toHaveLength(3);
  });

  test('filter', () => {
    const devs = toList([Dev.Sander, Dev.Wouter, Dev.Jeroen, Dev.Naoufal]).filter(d => d.name.includes('a'));
    expect(devs).toBeInstanceOf(List);
    expect(devs).toHaveLength(2);
  });

  test('first', () => {
    const devs = toList([Dev.Sander, Dev.Wouter, Dev.Jeroen, Dev.Naoufal]);
    expect(devs.first()).toMatchObject(Dev.Sander);
    expect(devs.first(d => d.name === Dev.Jeroen.name)).toMatchObject(Dev.Jeroen);
    expect(devs.first(d => d.name === 'Rene')).toBeUndefined();
    expect(new List().first()).toBeUndefined();
  });

  test('last', () => {
    const devs = toList([Dev.Sander, Dev.Wouter, Dev.Jeroen, Dev.Naoufal]);
    expect(devs.last()).toMatchObject(Dev.Naoufal);
    expect(devs.last(d => d.name === Dev.Jeroen.name)).toMatchObject(Dev.Jeroen);
    expect(devs.last(d => d.name === 'Rene')).toBeUndefined();
    expect(new List().last()).toBeUndefined();
  });

  test('concat', () => {
    const devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.concat()).toBeInstanceOf(List);
    expect(devs.concat()).toHaveLength(2);
    expect(devs.concat([])).toHaveLength(2);
    expect(devs.concat([Dev.Naoufal])).toHaveLength(3);
    expect(devs.concat(Dev.Naoufal)).toHaveLength(3);
    expect(devs.concat(Dev.Naoufal, Dev.Jeroen)).toHaveLength(4);
    expect(devs.concat(toList(Dev.Naoufal, Dev.Jeroen))).toHaveLength(4);
  });

  test('add', () => {
    let devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.add()).toBeInstanceOf(List);
    devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.add()).toHaveLength(2);
    devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.add([])).toHaveLength(2);
    devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.add(Dev.Naoufal)).toHaveLength(3);
    devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.add([Dev.Naoufal])).toHaveLength(3);
    devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.add(toList(Dev.Naoufal))).toHaveLength(3);
    devs = toList(Dev.Sander, Dev.Wouter);
    expect(devs.add(toList(Dev.Naoufal, Dev.Jeroen))).toHaveLength(4);
  });

  test('toJSON', () => {
    const json = toList(Dev.Sander, Dev.Wouter).toJSON();
    expect(json).not.toBeInstanceOf(List);
    expect(json).toBeInstanceOf(Array);
    expect(JSON.stringify(json)).toBe(JSON.stringify([Dev.Sander.toJSON(), Dev.Wouter.toJSON()]));
    const j = toList(Scope.Auth, Scope.Basic, Scope.Admin).toJSON();
    expect(JSON.stringify(j)).toBe(JSON.stringify([Scope.Auth.toJSON(), Scope.Basic.toJSON(), Scope.Admin.toJSON()]));
  });
});

describe('isList', () => {
  test('Is false', () => {
    expect(isList()).toBeFalsy();
    expect(isList({})).toBeFalsy();
    expect(isList([])).toBeFalsy();
    expect(isList<Dev>([Dev.Sander, Dev.Jeroen])).toBeFalsy();
  });

  test('Is true', () => {
    expect(isList<Dev>(toList(Dev.Sander, Dev.Jeroen))).toBeTruthy();
  });

  test('has', () => {
    const a = toList(Dev.Jeroen, Dev.Wouter, Dev.Naoufal);
    expect(a.overlaps()).toBeFalsy();
    expect(a.overlaps(Dev.Rob)).toBeFalsy();
    expect(a.overlaps([Dev.Rob, Dev.Sander])).toBeFalsy();
    expect(a.overlaps(toList(Dev.Rob, Dev.Sander))).toBeFalsy();
    expect(a.overlaps(Dev.Wouter)).toBeTruthy();
    expect(a.overlaps(Dev.Wouter, Dev.Sander)).toBeTruthy();
    expect(a.overlaps(toList(Dev.Rob, Dev.Sander, Dev.Jeroen))).toBeTruthy();
  });

  test('toObject', () => {
    const res = Dev.All.toObject('id');
    expect(res).toStrictEqual({
      [Dev.Naoufal.id]: Dev.Naoufal,
      [Dev.Wouter.id]: Dev.Wouter,
      [Dev.Sander.id]: Dev.Sander,
      [Dev.Jeroen.id]: Dev.Jeroen,
      [Dev.Rob.id]: Dev.Rob,
    });
  });
});

describe('toList', () => {
  test('from nothing', () => {
    const l = toList();
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(0);
  });

  test('from undefined', () => {
    const l = toList(undefined);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(0);
  });

  test('from null', () => {
    const l = toList(null);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(0);
  });

  test('from empty array', () => {
    const l = toList([]);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(0);
  });

  test('from array', () => {
    const l = toList([Dev.Sander, Dev.Wouter]);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(2);
  });

  test('from single item', () => {
    const l = toList(Dev.Naoufal);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(1);
  });

  test('from two items', () => {
    const l = toList(Dev.Sander, Dev.Jeroen);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(2);
    expect(l).toBeInstanceOf(List);
  });

  test('from array of two items', () => {
    const l = toList([Dev.Sander, Dev.Jeroen]);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(2);
  });

  test('from spread of two items', () => {
    const spread = [Dev.Sander, Dev.Jeroen];
    const l = toList(...spread);
    expect(isList(l)).toBeTruthy();
    expect(l).toHaveLength(2);
  });

  test('from list of two items', () => {
    const devs = toList(toList(Dev.Naoufal, Dev.Jeroen));
    expect(isList(devs)).toBeTruthy();
    expect(devs).toHaveLength(2);
  });

  test('distinct works', () => {
    const devs = toList(Dev.Jeroen, Dev.Sander, Dev.Naoufal, Dev.Jeroen, Dev.Naoufal);
    const dist = devs.distinct();
    expect(dist).toHaveLength(3);
  });

  test('next on actual list works', () => {
    const devs = toList(Dev.Jeroen, Dev.Naoufal, Dev.Wouter, Dev.Sander);
    expect(devs.next()).toMatchText(Dev.Jeroen);
    expect(devs.next(d => d.is(Dev.Jeroen))).toMatchText(Dev.Naoufal);
    expect(devs.next(d => d.is(Dev.Wouter))).toMatchText(Dev.Sander);
    expect(devs.next(d => d.is(Dev.Sander))).toBeUndefined();
  });

  const withSpread = (...d: Dev[]): List<Dev> =>
    toList<Dev>(d)
      .add([Dev.Sander, Dev.Sander])
      .reduce((ds, d) => ds.add(d), toList<Dev>());

  test('next on actual any list works', () => {
    const devs = withSpread(Dev.Jeroen, Dev.Wouter, Dev.Naoufal);
    expect(devs).toHaveLength(5);
  });

  test('prev on actual list from spread works', () => {
    const devs = toList(Dev.Jeroen, Dev.Naoufal, Dev.Wouter, Dev.Sander);
    expect(devs.prev()).toMatchText(Dev.Jeroen);
    expect(devs.prev(d => d.is(Dev.Jeroen))).toBeUndefined();
    expect(devs.prev(d => d.is(Dev.Naoufal))).toMatchText(Dev.Jeroen);
    expect(devs.prev(d => d.is(Dev.Wouter))).toMatchText(Dev.Naoufal);
    expect(devs.prev(d => d.is(Dev.Sander))).toMatchText(Dev.Wouter);
  });

  test('prev on actual list with list in first element works', () => {
    const devs = toList([Dev.Naoufal, Dev.Jeroen, Dev.Wouter, Dev.Sander]);
    expect(devs.prev()).toMatchText(Dev.Naoufal);
    expect(devs.prev(d => d.is(Dev.Naoufal))).toBeUndefined();
    expect(devs.prev(d => d.is(Dev.Jeroen))).toMatchText(Dev.Naoufal);
    expect(devs.prev(d => d.is(Dev.Wouter))).toMatchText(Dev.Jeroen);
    expect(devs.prev(d => d.is(Dev.Sander))).toMatchText(Dev.Wouter);
  });

  test('byId', () => {
    expect(toList()).toHaveLength(0);
    expect(toList(Currency.all()).byId(42)).toHaveLength(0);
    expect(toList(Currency.all()).byId(Currency.AUD.id)).toHaveLength(1);
    const devs = toList([Dev.Naoufal, Dev.Jeroen, Dev.Wouter, Dev.Sander]);
    expect(devs.byId(Dev.Sander.id)).toHaveLength(1);
    const food = toList("hamburger", "pizza", "fries");
    expect(food.byId(42)).toHaveLength(0);
  });

  test('remove', () => {
    expect(toList().remove(Dev.Rob)).toHaveLength(0);
    expect(toList(Dev.Sander).remove(Dev.Rob)).toHaveLength(1);
    expect(toList(Dev.Sander, Dev.Naoufal).remove(Dev.Rob)).toHaveLength(2);
    expect(toList({name: "Joyce"}, {name: "Claudia"}).remove(Dev.Rob)).toHaveLength(2);
    expect(toList(Dev.Wouter, Dev.Jeroen).remove(Dev.Jeroen)).toHaveLength(1);
    expect(toList(Dev.Wouter, Dev.Jeroen).remove(Dev.Jeroen).remove(Dev.Jeroen)).toHaveLength(1);
    expect(toList(Dev.Wouter, Dev.Jeroen).remove(Dev.Jeroen).remove(Dev.Wouter)).toHaveLength(0);
  });

  test('switch', () => {
    const list = toList().switch(Dev.Rob);
    expect(list).toHaveLength(1);
    const l2 = list.switch(Dev.Sander);
    expect(l2).toHaveLength(2);
    const l3 = l2.switch(Dev.Rob)
    expect(l3).toHaveLength(1);
  });
});

describe('asList', () => {
  test('from undefined', () => {
    expect(asList(Dev, undefined).first()).toBeUndefined();
    expect(asList(Dev, []).first()).toBeUndefined();
  });

  test('from devs works', () => {
    expect(asList(Dev, [Dev.Naoufal.toJSON()]).first()).toMatchJson(Dev.Naoufal);
  });

  test('next on empty list works', () => {
    expect(asList(Dev).next(d => d.is(Dev.Wouter))).toBeUndefined();
  });

  test('prev on empty list works', () => {
    expect(asList(Dev).prev(d => d.is(Dev.Wouter))).toBeUndefined();
  });

  test('asList on empty list works', () => {
    expect(asList(Dev).prev(d => d.is(Dev.Wouter))).toBeUndefined();
  });

  type HasId = { id: Id };
  const hasId: HasId = { id: 42 };
  const stringMe = (s: HasId[] | List<HasId>): string => s[0].id.toString();

  class WithId extends Enum {
    static Hoi = new WithId('hoi');
  }

  test('Advanced use', () => {
    expect(stringMe([hasId])).toMatchText('42');
    expect(stringMe([Dev.Naoufal])).toMatchText(Dev.Naoufal.id);
    expect(stringMe(toList(hasId))).toMatchText('42');
    expect(stringMe(toList(WithId.Hoi))).toMatchText('hoi');
    expect(stringMe(toList(Dev.Naoufal))).toMatchText(Dev.Naoufal.id);
  });
});
