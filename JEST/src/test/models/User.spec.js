import User from '../../models/User';
import { getConnection as db } from '../../helpers/connection';

const makeSut = () => User;

describe('Model User', () => {
  let ids = [];
  beforeAll(async () => {
    ids.push(
      (
        await db().user.create({
          data: { name: 'joao', email: 'joao@navit.com' },
        })
      ).id
    );
  });

  afterAll(async () => {
    await db().user.deleteMany({ where: { id: { in: ids } } });
  });

  describe('findAll', () => {
    const sut = makeSut();
    it('should be return some objects', async () => {
      let res = await sut.findAll();

      expect(res.length > 0).toBeTruthy();
      expect(
        res.some((e) => e.name === 'joao' && e.email === 'joao@navit.com')
      ).toBeTruthy();
    });
  });
});
