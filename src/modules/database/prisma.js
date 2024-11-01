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

//       const result = await query(args);
//       return result;
//     },
//   },
// });

prisma.$use(async (params, next) => {
  const convertIdsInWhere = (obj) => {
    if (obj) {
      for (const key in obj) {
        if (key.toLowerCase().endsWith('id') && typeof obj[key] === 'string') {
          obj[key] = Number(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          for (const key2 in obj[key]) {
            if (
              key2.toLowerCase().endsWith('id') &&
              typeof obj[key][key2] === 'string'
            ) {
              obj[key][key2] = Number(obj[key][key2]);
            } else if (typeof obj[key][key2] === 'object' && obj[key][key2]) {
              for (const key3 in obj[key][key2]) {
                if (
                  key3.toLowerCase().endsWith('id') &&
                  typeof obj[key][key2][key3] === 'string'
                ) {
                  obj[key][key2][key3] = Number(obj[key][key2][key3]);
                }
              }
            }
          }
        }
      }
    }
  };

  const convertIdsInData = (obj) => {
    if (obj) {
      for (const key in obj) {
        if (key.toLowerCase().endsWith('id') && typeof obj[key] === 'string') {
          obj[key] = Number(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          for (const key2 in obj[key]) {
            if (
              key2.toLowerCase().endsWith('id') &&
              typeof obj[key][key2] === 'string'
            ) {
              obj[key][key2] = Number(obj[key][key2]);
            } else if (typeof obj[key][key2] === 'object' && obj[key][key2]) {
              for (const key3 in obj[key][key2]) {
                if (
                  key3.toLowerCase().endsWith('id') &&
                  typeof obj[key][key2][key3] === 'string'
                ) {
                  obj[key][key2][key3] = Number(obj[key][key2][key3]);
                }
              }
            }
          }
        }
      }
    }
  };

  convertIdsInWhere(params.args.where);
  convertIdsInData(params.args.data);

  const result = await next(params);
  return result;
});

module.exports = prisma;
