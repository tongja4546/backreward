import React from 'react';
import { PageTitle } from '../../layout-components';
import Userlog1 from '../../example-components/Userlog/Userlog1';
import UserlogPageTitleActions from '../../example-components/Userlog/UserlogPageTitleActions';
export default function Userlog() {
  return (
    <>
      <PageTitle
        titleHeading="Userlog"
        titleDescription="Manage all of your Userlog from this page.">
       <UserlogPageTitleActions />
      </PageTitle>
      <Userlog1 />
    </>
  );
}
