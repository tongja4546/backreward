import React from 'react';

import { PageTitle } from '../../layout-components';

import Setting1 from '../../example-components/Setting/Setting1';
import SettingPageTitleActions from '../../example-components/Setting/SettingPageTitleActions';
export default function Setting() {
  return (
    <>
      <PageTitle
        titleHeading="Setting"
        titleDescription="Manage all of your Setting from this page.">
       <SettingPageTitleActions />
      </PageTitle>
      <Setting1 />
    </>
  );
}
