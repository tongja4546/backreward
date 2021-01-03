import React from 'react';

import { PageTitle } from '../../layout-components';

import Infomation1 from '../../example-components/Infomation/Infomation1';
import InfomationPageTitleActions from '../../example-components/Infomation/InfomationPageTitleActions';
export default function Infomation() {
  return (
    <>
      <PageTitle
        titleHeading="Infomation"
        titleDescription="Manage your app Infomation from this page.">
        <InfomationPageTitleActions />
      </PageTitle>

      <Infomation1 />
    </>
  );
}
