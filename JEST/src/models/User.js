import { getConnection as db } from '../helpers/connection';

class User {
  async findAll() {
    try {
      return await db().user.findMany();
    } catch (error) {
      return error;
    }
  }

  async findById(id) {
    try {
      return await db().user.findUnique({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }

  async findOne(fieldName, field) {
    try {
      return await db().user.findUnique({ where: { [fieldName]: field } });
    } catch (error) {
      return error;
    }
  }

  async create(name, email) {
    try {
      return await db().user.create({ data: { name, email } });
    } catch (error) {
      return error;
    }
  }

  async update(id, name) {
    try {
      return await db().user.update({
        where: { id: Number(id) },
        data: { name },
      });
    } catch (error) {
      return error;
    }
  }

  async destroy(id) {
    try {
      return await db().user.delete({ where: { id: Number(id) } });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
