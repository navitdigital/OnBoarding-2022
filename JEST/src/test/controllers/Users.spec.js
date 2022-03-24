import UsersController from '../../controllers/UsersController';
import User from '../../models/User';

const makeSut = () => UsersController;

describe('create()', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should be called with right params', async () => {
    let sut = makeSut();
    const findOneMock = jest.spyOn(User, 'findOne');
    const createMock = jest.spyOn(User, 'create');

    findOneMock.mockReturnValue(undefined);
    createMock.mockReturnValue({ name: 'teste' });

    const res = await sut.create({
      body: { name: 'teste', email: 'teste@teste.com' },
    });

    expect(findOneMock).toHaveBeenCalledWith('email', 'teste@teste.com');
    expect(createMock).toHaveBeenCalledWith('teste', 'teste@teste.com');

    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual({ name: 'teste' });
  });

  it('Should be returned badRequest if has user with same email', async () => {
    let sut = makeSut();
    const findOneMock = jest.spyOn(User, 'findOne');

    findOneMock.mockReturnValue({});

    const res = await sut.create({
      body: { name: 'teste', email: 'teste@teste.com' },
    });

    expect(findOneMock).toHaveBeenCalledWith('email', 'teste@teste.com');
    expect(res.statusCode).toBe(400);
    expect(res.body).toStrictEqual({ error: 'Email already exist' });
  });

  it('Should be returned badRequest if models throws error', async () => {
    let sut = makeSut();
    const findOneMock = jest.spyOn(User, 'findOne');

    findOneMock.mockRejectedValue(new Error('Prisma Crashed'));

    const res = await sut.create({
      body: { name: 'teste', email: 'teste@teste.com' },
    });

    expect(findOneMock).toHaveBeenCalledWith('email', 'teste@teste.com');
    expect(res.statusCode).toBe(400);
    expect(res.body).toStrictEqual({ error: 'Prisma Crashed' });
  });
});
