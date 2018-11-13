import { reqDflts } from './apiConfig';

export function getProducts () {
  return reqDflts.get('products.json');
}
