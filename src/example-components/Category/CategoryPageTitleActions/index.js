import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Button,
  TextField, Dialog
} from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';

const OrdersPageTitleActions = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [value, setValue] = useState('');
  const [selectlist, setselectlist] = useState(null);
  const [qtysec, setqtysec] = useState(null);
  const [pointsec, setqtypoint] = useState(null);
  const [namesec, setname] = useState(null);
  const [productnamesec, setqtyproductname] = useState(null);
  const [descriptionsec, setqtydescription] = useState(null);
  const [pricesec, setqtyPrice] = useState(null);
  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
    <div
      {...console.log(file)}
      key={file.name}
      className="rounded avatar-image overflow-hidden d-140 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const onchangesproductname = (event) => {
    setqtyproductname(event.target.value);
  };

  const onchangesname = (event) => {
    setname(event.target.value);
  };

  const onchangesdesc = (event) => {
    setqtydescription(event.target.value);
  };

  const onchangespoint = (event) => {
    setqtypoint(event.target.value);
  };

  const onchanges = (event) => {
    setqtysec(event.target.value);
  };

  const onchangesprice = (event) => {
    setqtyPrice(event.target.value);
  };
  const handleClicksave = async () => {
    try {
   console.log(thumbs);
      const formData = new FormData();
      formData.append('name',namesec);
      formData.append('point', pointsec);
      formData.append('description', descriptionsec);
      formData.append('Cat_ID', 1);
      formData.append('qty', qtysec);
      formData.append('productname', productnamesec);
      formData.append('cash', pricesec);
      formData.append('image',files[0]);
      formData.append('type', 1);
      let headerss = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
      };
      await axios.post('https://dafarewards.com:7002/api/v1/newreward', formData, { headers: headerss }).then((res) => {
        //getreward(1);
        console.log(res)
        setModal(!modal);
      }).catch((error) => {
        console.log(error)
      });
    }
    catch (error) {
      console.log(error)
    }

  };
  return (
    <>
      <Button onClick={toggleModal} className="btn-primary">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </span>
        <span className="btn-wrapper--label">Add Reward</span>
      </Button>
      <Dialog
        scroll="body"
        open={modal}
        maxWidth="md"
        onClose={toggleModal}
        classes={{ paper: 'w-100 border-0 bg-white' }}>
        <div className="p-4 text-center">
          <div className="py-4 d-flex align-items-center justify-content-center" >
            <div className="dropzone rounded shadow-xxl">
              <div {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
                <input {...getInputProps()} />
                <div className="dropzone-inner-wrapper d-140 rounded dropzone-avatar">
                  <div className="avatar-icon-wrapper d-140 rounded m-2">
                    <Button
                      onClick={open}
                      className="avatar-button badge shadow-sm btn-icon badge-position badge-position--top-right border-0 text-indent-0 d-40 badge-circle btn-second text-white">
                      <PublishTwoToneIcon className="d-20" />
                    </Button>
                    <div>
                      {isDragAccept && (
                        <div className="rounded overflow-hidden d-140 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                          <CheckIcon className="d-40" />
                        </div>
                      )}
                      {isDragReject && (
                        <div className="rounded overflow-hidden d-140 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                          <CloseTwoToneIcon className="d-60" />
                        </div>
                      )}
                      {!isDragActive && (
                        <div className="rounded overflow-hidden d-140 bg-neutral-dark text-center font-weight-bold text-black-50 d-flex justify-content-center align-items-center">
                          <AccountCircleTwoToneIcon className="d-50" />
                        </div>
                      )}
                    </div>
                    {/* <div>{thumbs}</div> */}
                    {thumbs.length > 0 && <div>{thumbs}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container>
            <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              New Reward
              </div>
            <div className="py-4">
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Product Name'
                      value={(productnamesec === null) ? '' : productnamesec}
                      onChange={onchangesproductname}
                      variant="outlined"
                      fullWidth
                      placeholder="Product name..."
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Show Name'
                      value={(namesec === null) ? '' : namesec}
                      onChange={onchangesname}
                      variant="outlined"
                      fullWidth
                      placeholder="Show Name..."
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Description'
                      value={(descriptionsec === null) ? '' : descriptionsec}
                      onChange={onchangesdesc}
                      variant="outlined"
                      fullWidth
                      placeholder="Description..."
                    />
                  </div>
                  <Grid container spacing={6}>
                    <Grid item md={4}>
                      <div className="mb-4">
                        <TextField
                          label='Point'
                          value={(pointsec === null) ? '' : pointsec}
                          onChange={onchangespoint}
                          variant="outlined"
                          fullWidth
                          placeholder="Point..."
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="mb-4">
                        <TextField
                          label='Price'
                          value={(pricesec === null) ? '' : pricesec}
                          onChange={onchangesprice}
                          variant="outlined"
                          fullWidth
                          placeholder="Price..."
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="mb-4">
                        <TextField
                          label='Stock'
                          value={(qtysec === null) ? '' : qtysec}
                          onChange={onchanges}
                          variant="outlined"
                          fullWidth
                          placeholder="Stock..."
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Container>
          <div className="divider my-4" />
          <Button size="large" className="btn-success font-weight-bold" onClick={handleClicksave} >
            Add Reward
                </Button>
        </div>
      </Dialog>
    </>
  );
};

export default OrdersPageTitleActions;
