import { LearnAngular2Page } from './app.po';

describe('learn-angular2 App', function() {
  let page: LearnAngular2Page;

  beforeEach(() => {
    page = new LearnAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
