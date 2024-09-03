export type TProductType = {
  id: string;
};

export type TProductTypeGraphql = TProductType & {
  __typename: 'ProductTypeDefinition';
  attributeDefinitions: {
    results: Array<{}>;
    __typename: 'AttributeDefinitionResult';
  };
};
