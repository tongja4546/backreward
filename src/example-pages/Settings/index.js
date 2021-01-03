import React from 'react';

import { PageTitle } from '../../layout-components';

import Settings1 from '../../example-components/Settings/Settings1';
import SettingsPageTitleActions from '../../example-components/Settings/SettingsPageTitleActions';
export default function Settings() {
  return (
    <>
      <PageTitle
        titleHeading="Settings"
        titleDescription="Manage your app settings from this page.">
        <SettingsPageTitleActions />
      </PageTitle>

      <Settings1 />
    </>
  );
}
