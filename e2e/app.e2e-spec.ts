import { FunPage } from './app.po';

describe('fun App', () => {
  let page: FunPage;

  beforeEach(() => {
    page = new FunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
