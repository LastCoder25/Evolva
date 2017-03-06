import { EvolvaPage } from './app.po';

describe('evolva App', function() {
  let page: EvolvaPage;

  beforeEach(() => {
    page = new EvolvaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
