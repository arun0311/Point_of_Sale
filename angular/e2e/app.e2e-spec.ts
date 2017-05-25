import { GithubsearchPage } from './app.po';

describe('githubsearch App', () => {
  let page: GithubsearchPage;

  beforeEach(() => {
    page = new GithubsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
