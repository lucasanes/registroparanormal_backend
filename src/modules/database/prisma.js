const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// .$extends({
//   query: {
//     $allOperations: async (args, query) => {
//       if (args.args && args.args.where) {
//         for (const key in args.args.where) {
//           if (key.includes('id') && typeof args.args.where[key] === 'string') {
//             args.args.where[key] = parseInt(args.args.where[key], 10);
//           }
//         }
//       }

//       if (args.args && args.args.data) {
//         for (const key in args.args.data) {
//           if (key.includes('id') && typeof args.args.data[key] === 'string') {
//             args.args.data[key] = parseInt(args.args.data[key], 10);
//           }
//         }
//       }

//       console.log(args);

//       const result = await query(args);
//       return result;
//     },
//   },
// });

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
