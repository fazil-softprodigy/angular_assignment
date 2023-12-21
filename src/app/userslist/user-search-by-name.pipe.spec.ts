import { UserSearchByNamePipe } from './user-search-by-name.pipe';

describe('UserSearchByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserSearchByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
