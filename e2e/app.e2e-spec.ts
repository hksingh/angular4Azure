import { Angular4ToAzurePage } from './app.po';

describe('angular4-to-azure App', () => {
  let page: Angular4ToAzurePage;

  beforeEach(() => {
    page = new Angular4ToAzurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
