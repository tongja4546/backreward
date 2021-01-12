import React from 'react';

import { PageTitle } from '../../layout-components';

import Gamelog1 from '../../example-components/Gamelog/Gamelog1';
import GamelogPageTitleActions from '../../example-components/Gamelog/GamelogPageTitleActions';
export default function Gamelog() {
  return (
    <>
      <PageTitle
        titleHeading="Gamelog"
        titleDescription="Manage all of your Gamelog from this page.">
       <GamelogPageTitleActions />
      </PageTitle>
      <Gamelog1 />
    </>
  );
}
