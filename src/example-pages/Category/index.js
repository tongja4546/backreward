import React from 'react';

import { PageTitle } from '../../layout-components';

import Category from '../../example-components/Category/Category';
import CategoryPageTitleActions from '../../example-components/Category/CategoryPageTitleActions';
export default function Orders() {
  return (
    <>      
     <PageTitle
      titleHeading="Category">
      <CategoryPageTitleActions />
    </PageTitle>
      <Category />
    </>
  );
}
