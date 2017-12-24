const DB_TIMEOUT = 2000;

const db = {
  1: {
    id: 1,
    name: 'John',
    age: '12',
    gender: 'male',
    content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    deleted: false,
  },
  2: {
    id: 2,
    name: 'Kate',
    age: '23',
    gender: 'female',
    content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    deleted: false,
  },
  3: {
    id: 3,
    name: 'Abraham',
    age: '37',
    gender: 'male',
    content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    deleted: false,
  },
  4: {
    id: 4,
    name: 'Olcia',
    age: '23',
    gender: 'female',
    content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    deleted: false,
  },
  5: {
    id: 5,
    name: 'Zuzia',
    age: '23',
    gender: 'female',
    content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    deleted: false,
  },
  6: {
    id: 6,
    name: 'Jakub',
    age: '25',
    gender: 'male',
    content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    deleted: false,
  },
};

const getAll = (cb) => {
  try {
    setTimeout(() => {
      const arr = Object.keys(db).map(item => db[item]);
      cb(null, arr);
    }, DB_TIMEOUT);
  } catch (e) {
    cb({ err: 'error while getting all!' });
  }
};

const get = (id, cb) => {
  setTimeout(() => {
    const item = db[id];
    if (!item) {
      cb({ err: 'error!' });
    } else if (item.deleted) {
      cb({ err: 'item does not exist!' });
    } else {
      cb(null, item);
    }
  }, DB_TIMEOUT);
};

const add = (item, cb) => {
  setTimeout(() => {
    try {
      const ids = Object.keys(db);
      const lastId = ids[ids.length - 1];
      const newId = Number(lastId) + 1;
      const newItem = {
        ...item,
        deleted: false,
      };
      db[newId] = newItem;
      cb(null, newItem);
    } catch (e) {
      cb({ err: 'error while adding!' });
    }
  }, DB_TIMEOUT);
};

const remove = (idToRemove, cb) => {
  setTimeout(() => {
    try {
      Object.keys(db).map((id) => {
        if (Number(id) === Number(idToRemove)) {
          db[id].deleted = true;
        }
        return db[id];
      });
      cb(null, db[idToRemove]);
    } catch (e) {
      cb({ err: 'error while removing!' });
    }
  }, DB_TIMEOUT);
};

export {
  getAll,
  get,
  add,
  remove,
};
