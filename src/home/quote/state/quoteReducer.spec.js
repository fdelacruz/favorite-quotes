import expect from 'expect';
import quoteReducer from './quoteReducer';

describe('quoteReducer', () => {

  function stateBefore() {
    return [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      }
    ];
  }

  it('should add quotes by id', () => {
    const action = {
      type: 'ADD_QUOTE_BY_ID',
      payload: {
        text: 'This is a new quote',
        author: 'Someone awesome',
        id: 3,
        likeCount: 0
      }
    };
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'John Smith',
        id: 2,
        likeCount: 0
      },
      {
        text: 'This is a new quote',
        author: 'Someone awesome',
        id: 3,
        likeCount: 0
      }

    ];
    expect(actual).toEqual(expected);
  });

  it('should return previous state when trying to make a quote like count negative', () => {
    const action = {
      type: 'UNLIKE_QUOTE_BY_ID',
      payload: {id: 0}
    };
    const actual = quoteReducer(stateBefore(), action);
    const expected = stateBefore();
    expect(actual).toEqual(expected);
  });
});
