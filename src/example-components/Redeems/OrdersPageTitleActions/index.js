import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

const OrdersPageTitleActions = () => {
  return (
    <>
      <Button className="btn-primary">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </span>
        <span className="btn-wrapper--label">Add Order</span>
      </Button>
    </>
  );
};

export default OrdersPageTitleActions;
