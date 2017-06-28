import { InteractiveChildParentPage } from './app.po';

describe('interactive-child-parent App', () => {
  let page: InteractiveChildParentPage;

  beforeEach(() => {
    page = new InteractiveChildParentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
