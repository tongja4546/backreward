import React from 'react';

import { Button } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

const AccountsPageTitleActions = () => {
  return (
    <>
      <Button component={NavLink} to="/Orders" className="btn-primary">
        <span className="btn-wrapper--label">Recent Orders</span>
      </Button>
    </>
  );
};

export default AccountsPageTitleActions;
