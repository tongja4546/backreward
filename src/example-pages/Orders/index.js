import React from 'react';

import { PageTitle } from '../../layout-components';

import Orders1 from '../../example-components/Orders/Orders1';
import OrdersPageTitleActions from '../../example-components/Orders/OrdersPageTitleActions';
export default function Orders() {
  return (
    <>      
     <PageTitle
      titleHeading="Orders">
      <OrdersPageTitleActions />
    </PageTitle>
      <Orders1 />
    </>
  );
}
