describe('Sum Functions', () => {
  test('2 + 2 is 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('should return 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('', () => {
  let number;

  beforeEach(() => {
    number = 2;
  });
  it('should return 4', () => {
    number = number + 1;

    expect(number).toBe(3);
  });

  it('should return 4', () => {
    number = number * 2;
    expect(number).toBe(4);
  });
});
