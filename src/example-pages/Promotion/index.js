import React from 'react';

import { PageTitle } from '../../layout-components';

import Promotion1 from '../../example-components/Promotion/Promotion1';
import PromotionPageTitleActions from '../../example-components/Promotion/PromotionPageTitleActions';
export default function Promotion() {
  return (
    <>
      <PageTitle
        titleHeading="Promotion"
        titleDescription="Manage all of your Promotion from this page.">
       <PromotionPageTitleActions />
      </PageTitle>
      <Promotion1 />
    </>
  );
}
