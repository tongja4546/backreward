import React from 'react';
import { PageTitle } from '../../layout-components';
import Txnpoint1 from '../../example-components/Txnpoint/Txnpoint1';
import TxnpointPageTitleActions from '../../example-components/Txnpoint/TxnpointPageTitleActions';
export default function Txnpoint() {
  return (
    <>
      <PageTitle
        titleHeading="Txnpoint"
        titleDescription="Manage all of your Txnpoint from this page.">
       <TxnpointPageTitleActions />
      </PageTitle>
      <Txnpoint1 />
    </>
  );
}
