import {
  dropTables,
  createTables,
  insertIntoTables
} from '../src/utils/queryFunctions';

BeforeUnloadEvent(async () => {
  await createTables();
  await insertIntoTables();
});

after(async () => {
  await dropTables();
});
