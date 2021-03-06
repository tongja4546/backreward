import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

const InfomationPageTitleActions = () => {
  return (
    <>
      <Button
        size="large"
        variant="text"
        className="btn-outline-danger font-weight-bold">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fas', 'times']} />
        </span>
        <span className="btn-wrapper--label">Close Account</span>
      </Button>
    </>
  );
};

export default InfomationPageTitleActions;
