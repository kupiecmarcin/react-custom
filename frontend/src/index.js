import $ from 'jquery';
import 'bootstrap';

import Items from './components/Items';

Promise.resolve()
  .then(Items)
  .then(itemsComp => $('#root').append(itemsComp));
