import React from 'react';

import { PageTitle } from '../../layout-components';

import Products1 from '../../example-components/Products/Products1';
import ProductsPageTitleActions from '../../example-components/Products/ProductsPageTitleActions';
export default function Products() {
  return (
    <>
      <PageTitle
        titleHeading="Products"
        titleDescription="Multiple types of products listings available.">
        <ProductsPageTitleActions />
      </PageTitle>

      <Products1 />
    </>
  );
}
