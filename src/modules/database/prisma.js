const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.args && params.args.where) {
    for (const key in params.args.where) {
      if (key.includes('id') && typeof params.args.where[key] === 'string') {
        params.args.where[key] = parseInt(params.args.where[key], 10);
      }
    }
  }

  if (params.args && params.args.data) {
    for (const key in params.args.data) {
      if (key.includes('id') && typeof params.args.data[key] === 'string') {
        params.args.data[key] = parseInt(params.args.data[key], 10);
      }
    }
  }

  const result = await next(params);
  return result;
});

module.exports = prisma;
