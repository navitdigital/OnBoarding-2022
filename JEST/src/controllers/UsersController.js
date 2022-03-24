import User from '../models/User';
import { success, badRequest } from '../helpers/httpResponses';

const findAll = async () => {
  try {
    return success(await User.findAll());
  } catch (e) {
    return badRequest('e.message');
  }
};

const find = async ({ params }) => {
  try {
    const user = await User.findById(params.id);
    if (!user) throw new Error('User not found');

    return success(user);
  } catch (e) {
    return badRequest(e.message);
  }
};

const create = async ({ body }) => {
  try {
    const { name, email } = body;

    let user = await User.findOne('email', email);
    if (user) throw new Error('Email already exist');

    return success(await User.create(name, email));
  } catch (e) {
    return badRequest(e.message);
  }
};

const update = async ({ body, params }) => {
  try {
    const { id } = params;
    const { name } = body;

    let user = await User.findById(id);
    if (!user) throw new Error('User not found');

    return success(await User.update(id, name));
  } catch (e) {
    return badRequest(e.message);
  }
};

const destroy = async ({ params }) => {
  try {
    const { id } = params;

    const user = await User.findById(id);
    if (!user) throw new Error('User not found');

    return success(await User.destroy(id));
  } catch (e) {
    return badRequest(e.message);
  }
};

export default { create, findAll, find, update, destroy };
