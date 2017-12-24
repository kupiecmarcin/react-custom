import * as db from './mockDB';

const getAll = () => (
  new Promise((resolve, reject) => {
    db.getAll((err, items) => {
      if (err) {
        return reject(err);
      }
      return resolve(items);
    });
  })
);

const get = id => (
  new Promise((resolve, reject) => {
    db.get(id, (err, item) => {
      if (err) {
        return reject(err);
      }
      return resolve(item);
    });
  })
);

const add = item => (
  new Promise((resolve, reject) => {
    db.add(item, (err, addedItem) => {
      if (err) {
        return reject(err);
      }
      return resolve(addedItem);
    });
  })
);

const remove = id => (
  new Promise((resolve, reject) => {
    db.remove(id, (err, item) => {
      if (err) {
        return reject(err);
      }
      return resolve(item);
    });
  })
);

export {
  getAll,
  get,
  add,
  remove,
};
