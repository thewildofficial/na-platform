// const config = require('../package.json').detox;
// const detox = require('detox');

describe('Example', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('login-content'))).toBeVisible();
  });

  it('should type in input', async () => {
    await element(by.id('username')).typeText('hello');
    await element(by.id('password')).typeText('world');
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
