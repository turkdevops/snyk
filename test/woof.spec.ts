import getWoof from '../src/cli/commands/woof/getWoof';

// trivial change to test if CI is working
describe('Woof command - Language option', () => {
  it('Default language is "en"', () => {
    // $ snyk woof
    expect(getWoof([{} as any])).toEqual('Woof!');
  });

  it('Returns selected language', () => {
    expect(
      getWoof([
        {
          language: 'he',
        } as any,
      ]),
    ).toEqual(' !הב ');
  });

  it('Returns default when selected language is invalid', () => {
    expect(
      getWoof([
        {
          language: 'toString',
        } as any,
      ]),
    ).toEqual('Woof!');
  });
});
