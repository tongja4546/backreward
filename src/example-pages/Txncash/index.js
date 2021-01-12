import React from 'react';
import { PageTitle } from '../../layout-components';
import Txncash1 from '../../example-components/Txncash/Txncash1';
import TxncashPageTitleActions from '../../example-components/Txncash/TxncashPageTitleActions';
export default function Txncash() {
  return (
    <>
      <PageTitle
        titleHeading="Txncash"
        titleDescription="Manage all of your Txncash from this page.">
       <TxncashPageTitleActions />
      </PageTitle>
      <Txncash1 />
    </>
  );
}
