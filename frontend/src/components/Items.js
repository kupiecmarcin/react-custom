import * as API from '../utils/api';
import Item from './Item';

export default () => {
  const state = {
    items: [],
  };

  const componentWillMount = () => (
    API.getAll().then((items) => {
      state.items = [...state.items, ...items];
    })
  );

  const remove = (id) => {
    state.items = state.items.filter(item => (item.id === id));
  };

  const render = () => {
    let component = '<section class="container"><div class="row">';
    state.items.map((item) => {
      component += Item({ ...item, remove });
    });
    component += '</div></section>';
    return component;
  };

  const compile = () => (
    Promise.resolve()
      .then(componentWillMount)
      .then(render)
  );

  return compile();
};
