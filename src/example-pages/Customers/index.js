import React from 'react';

import { PageTitle } from '../../layout-components';

import Customers1 from '../../example-components/Customers/Customers1';
import CustomersPageTitleActions from '../../example-components/Customers/CustomersPageTitleActions';
export default function Customers() {
  return (
    <>
      <PageTitle
        titleHeading="Customers"
        titleDescription="Seamless listings for your customers lists.">
        {/* <CustomersPageTitleActions /> */}
      </PageTitle>

      <Customers1 />
    </>
  );
}
