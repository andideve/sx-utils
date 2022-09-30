import { omit, isFunction, runIfFn } from '../src';

describe('omit', () => {
  it('return removed object properties', () => {
    expect(
      omit({ disableCache: true, darkMode: 'class', space: {} }, ['disableCache', 'darkMode']),
    ).toEqual({ space: {} });
  });

  it('invalid object keys', () => {
    expect(omit({ space: {} }, ['disableCache', 'darkMode'])).toEqual({ space: {} });
  });
});

describe('isFunction', () => {
  it('valid', () => {
    expect(isFunction(console.log)).toBe(true);
  });

  it('invalid', () => {
    expect(isFunction(console)).toBe(false);
  });
});

describe('runIfFn', () => {
  it('run function', () => {
    expect(runIfFn(() => true)).toBe(true);
  });

  it('forward arg(s). to the function', () => {
    expect(runIfFn((...args: any[]) => args, 'Arg 1', 'Arg 2')).toContain('Arg 2');
  });

  it('return an arg. if it is not a function', () => {
    expect(runIfFn(null)).toBe(null);
  });
});
