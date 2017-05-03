import { ValtoparentPage } from './app.po';

describe('valtoparent App', () => {
  let page: ValtoparentPage;

  beforeEach(() => {
    page = new ValtoparentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
