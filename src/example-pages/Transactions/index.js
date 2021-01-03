import React from 'react';

import { PageTitle } from '../../layout-components';

import Transactions1 from '../../example-components/Transactions/Transactions1';
import TransactionsPageTitleActions from '../../example-components/Transactions/TransactionsPageTitleActions';
export default function Transactions() {
  return (
    <>
      <PageTitle
        titleHeading="Transactions"
        titleDescription="Manage all of your transactions from this page.">
        <TransactionsPageTitleActions />
      </PageTitle>

      <Transactions1 />
    </>
  );
}
