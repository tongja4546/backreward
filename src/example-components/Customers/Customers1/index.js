import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import { FlagIcon } from 'react-flag-kit';
import axios from 'axios';
export default function LivePreviewExample() {

  useEffect(() => {
    getcustomer(1);
  }, []);
  const [pagingcount, Setrepaging] = useState(0);
  const [page, setPage] = React.useState(1);
  const [cuslist, setlist] = useState(null);
  const getcustomer = (event) => {
    axios
      .get("https://dafarewards.com:7002/api/v1/userlist", {
        params: {
          Cat_ID: 0,
          page: event,
          type: 1
        }
      })
      .then((res) => {
        setlist(res.data.message.cuslist)
        Setrepaging(res.data.message.pagecount)
      });
  };
  const handleChange = (event, value) => {
    setPage(value);
    getcustomer(value);
  };

  return (
    <>
      <Card className="overflow-hidden">
        <div className="p-4">
          <div className="table-responsive-md">
            <Table className="table table-alternate-spaced mb-0">
              <thead>
                <tr>
                  <th
                    style={{ width: '300px' }}
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Name
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Username
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Last Active
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Point
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col"></th>
                </tr>
              </thead>
              <tbody>

                {(cuslist == null) ? <tr><td></td></tr> : cuslist.map(listitem => (
                  <React.Fragment>
                    <tr key={listitem.member_id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper avatar-initials mr-3">
                            <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                              {listitem.firstname.slice(0, 2)}
                            </div>
                          </div>
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              {listitem.firstname + ' ' + listitem.lastname}
                            </a>
                            <span className="text-black-50 d-block">
                              Customer since  {moment(listitem.DateCreate).format('YYYY-MM-DD')}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{listitem.playerid} </span>
                      </td>
                      <td>
                        <span>  {moment(listitem.DateCreate).format('YYYY-MM-DD')}</span>
                      </td>
                      <td className="font-size-lg font-weight-bold">

                        <span>  {listitem.Point}</span>
                        <small>P</small>
                      </td>
                      <td className="text-right">
                        <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'search']}
                            className="font-size-sm"
                          />
                        </Button>
                        <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr className="divider"></tr>
                  </React.Fragment>
                ))}


              </tbody>
            </Table>
          </div>
          <div className="d-flex align-items-center justify-content-center pt-5 mb-4">
            <Pagination
              onChange={handleChange}
              page={page}
              className="pagination-primary"
              count={pagingcount}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </Card>

    </>
  );
}
