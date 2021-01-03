import React from 'react';

import { PageTitle } from '../../layout-components';

import Reward from '../../example-components/Reward/Reward';
import RewardPageTitleActions from '../../example-components/Reward/RewardPageTitleActions';
export default function Orders() {
  return (
    <>      
     <PageTitle
      titleHeading="Reward">
      <RewardPageTitleActions />
    </PageTitle>
      <Reward />
    </>
  );
}
