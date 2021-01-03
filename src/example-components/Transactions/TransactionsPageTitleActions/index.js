import React, { useState } from 'react';

import clsx from 'clsx';

import { InputAdornment, TextField } from '@material-ui/core';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

const TransactionsPageTitleActions = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  return (
    <>
      <div className="d-flex justify-content-end">
        <div
          className={clsx(
            'search-wrapper search-wrapper-right d-flex justify-content-end search-wrapper--grow',
            { 'is-active': searchOpen }
          )}>
          <TextField
            variant="outlined"
            size="small"
            id="input-with-icon-textfield22-2"
            placeholder="Search orders..."
            onFocus={openSearch}
            onBlur={closeSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionsPageTitleActions;
