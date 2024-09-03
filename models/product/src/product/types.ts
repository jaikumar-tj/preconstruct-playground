import { TCategory } from '@carlos-test-data/category';
import { TProductTypeGraphql } from '@carlos-test-data/product-type';
type Product = {
  id: string;
};
export type TProduct = Product & {
  skus: Array<String>;
};

export type TProductRest = Omit<TProduct, 'skus'>;

export type TProductGraphql = Omit<
  TProduct,
  'productType' | 'state' | 'taxCategory'
> & {
  productType: TProductTypeGraphql;
  category: TCategory;
  // TODO: add productSelectionRefs
  __typename: 'Product';
};
