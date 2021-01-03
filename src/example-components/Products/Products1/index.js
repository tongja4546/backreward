import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Grid,
  FormControlLabel,
  Checkbox,
  Card,
  Button
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import product1 from '../../../assets/images/stock-products/product-1.png';
import product2 from '../../../assets/images/stock-products/product-2.png';
import product3 from '../../../assets/images/stock-products/product-3.png';

import Rating from '@material-ui/lab/Rating';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return <span>{{ value }}°C</span>;
}

export default function LivePreviewExample() {
  const [isPrice, setPrice] = useState(true);
  const togglePrice = () => setPrice(!isPrice);

  const [isBrand, setBrand] = useState(true);
  const toggleBrand = () => setBrand(!isBrand);

  const [isColor, setColor] = useState(true);
  const toggleColor = () => setColor(!isColor);

  const [isCpu, setCpu] = useState(false);
  const toggleCpu = () => setCpu(!isCpu);

  const [rating, setRating] = useState(4);

  const [value, setValue] = useState([350, 2999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = useState([2, 6]);

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xl={4}>
          <Card className="card-box mb-5 accordion">
            <Card
              className={clsx(
                'border-0 bg-transparent shadow-none rounded-0 card-box',
                { 'panel-open': isPrice }
              )}>
              <Card className="border-0 bg-transparent shadow-none rounded-top">
                <div className="card-header rounded-top">
                  <div className="panel-title">
                    <div className="accordion-toggle rounded-top overflow-hidden">
                      <Button
                        size="large"
                        variant="text"
                        className="btn-link border-bottom-0 d-flex align-items-center justify-content-between btn-transition-none"
                        onClick={togglePrice}>
                        <span className="font-weight-bold">Price</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="font-size-xl accordion-icon"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Collapse in={isPrice}>
                  <div className="px-4 pt-5 pb-4">
                    <Slider
                      className="slider-primary"
                      value={value}
                      max={3965}
                      min={50}
                      step={25}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      getAriaValueText={valuetext}
                    />
                  </div>
                </Collapse>
              </Card>
            </Card>
            <div className="divider bg-dark opacity-4" />
            <Card
              className={clsx(
                'border-0 bg-transparent shadow-none rounded-0 card-box',
                { 'panel-open': isBrand }
              )}>
              <Card className="border-0 bg-transparent shadow-none rounded-0">
                <div className="card-header rounded-0">
                  <div className="panel-title">
                    <div className="accordion-toggle rounded-0 overflow-hidden">
                      <Button
                        size="large"
                        variant="text"
                        className="btn-link border-bottom-0 d-flex align-items-center justify-content-between btn-transition-none"
                        onClick={toggleBrand}>
                        <span className="font-weight-bold">Brand</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="font-size-xl accordion-icon"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Collapse in={isBrand}>
                  <div className="px-4 pt-2 pb-4">
                    <Grid container spacing={0} className="px-1">
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1001"
                          className="align-self-center"
                          label="Lenovo"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1003"
                          className="align-self-center"
                          label="Intel"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1000"
                          className="align-self-center"
                          label="Apple"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1004"
                          className="align-self-center"
                          label="Huawei"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1005"
                          className="align-self-center"
                          label="Xiaomi"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1006"
                          className="align-self-center"
                          label="LG"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Collapse>
              </Card>
            </Card>
            <div className="divider bg-dark opacity-4" />
            <Card
              className={clsx(
                'border-0 bg-transparent shadow-none rounded-0 card-box',
                { 'panel-open': isColor }
              )}>
              <Card className="border-0 bg-transparent shadow-none rounded-0">
                <div className="card-header rounded-0">
                  <div className="panel-title">
                    <div className="accordion-toggle rounded-0 overflow-hidden">
                      <Button
                        size="large"
                        variant="text"
                        className="btn-link border-bottom-0 d-flex align-items-center justify-content-between btn-transition-none"
                        onClick={toggleColor}>
                        <span className="font-weight-bold">Color</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="font-size-xl accordion-icon"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Collapse in={isColor}>
                  <div className="px-4 pt-2 pb-4">
                    <div className="py-2 d-flex align-items-center justify-content-center flex-wrap">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-danger">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-first">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg active bg-second">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-warning">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-deep-blue">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-plum-plate">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-amy-crisp">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-40 rounded hover-scale-rounded btn-swatch btn-swatch--lg bg-success">
                        &nbsp;
                      </a>
                    </div>
                  </div>
                </Collapse>
              </Card>
            </Card>
            <div className="divider bg-dark opacity-4" />
            <Card
              className={clsx(
                'border-0 bg-transparent shadow-none rounded-0 card-box',
                { 'panel-open': isCpu }
              )}>
              <Card className="border-0 bg-transparent shadow-none rounded-bottom">
                <div className="card-header rounded-bottom">
                  <div className="panel-title">
                    <div className="accordion-toggle overflow-hidden">
                      <Button
                        size="large"
                        variant="text"
                        className="btn-link border-bottom-0 d-flex align-items-center justify-content-between btn-transition-none"
                        onClick={toggleCpu}>
                        <span className="font-weight-bold">CPU Cores</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-up']}
                          className="font-size-xl accordion-icon"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Collapse in={isCpu}>
                  <div className="px-4 pt-2 pb-4">
                    <Grid container spacing={6}>
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1007"
                          className="align-self-center"
                          label="Atom"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <FormControlLabel
                          control={<Checkbox name="check" />}
                          id="CustomCheckbox1008"
                          className="align-self-center"
                          label="Multi"
                        />
                      </Grid>
                    </Grid>

                    <div className="p-4">
                      <Slider
                        className="slider-primary"
                        value={value2}
                        max={10}
                        min={2}
                        step={1}
                        valueLabelDisplay="auto"
                        onChange={handleChange2}
                      />
                    </div>
                  </div>
                </Collapse>
              </Card>
            </Card>
          </Card>
        </Grid>
        <Grid item xl={8}>
          <Card className="mb-5">
            <div className="card-tr-actions z-over">
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-neutral-danger btn-transition-none btn-pill d-30 btn-icon p-0">
                <FontAwesomeIcon icon={['far', 'heart']} />
              </Button>
            </div>
            <Grid container spacing={6}>
              <Grid
                item
                lg={4}
                className="d-flex align-items-center justify-content-center">
                <div className="divider-v divider-v-md d-none d-lg-block" />
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="card-img-wrapper card-box-hover rounded">
                  <img
                    alt="..."
                    className="img-fluid hover-scale-lg"
                    src={product1}
                  />
                </a>
              </Grid>
              <Grid
                item
                lg={5}
                className="d-flex align-items-center justify-content-center">
                <div className="divider-v divider-v-md d-none d-lg-block" />
                <div className="py-4">
                  <div className="font-weight-bold font-size-xxl">
                    Apple TV Gen. 4 2020
                  </div>
                  <div className="d-flex flex-wrap pt-2 pb-3">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </div>
                  <div className="font-size-sm text-black-50 pb-3">
                    All components from the General dashboard template can be
                    used in the individual applications pages, without
                    modifications.
                  </div>
                  <div className="font-size-sm">
                    <div className="py-2">
                      <span className="text-black-50 pr-2">Color:</span>
                      Black
                    </div>
                    <div className="py-1">
                      <span className="text-black-50 pr-2">
                        Operating System:
                      </span>
                      MacOS
                    </div>
                    <div className="py-1">
                      <span className="text-black-50 pr-2">Version:</span>
                      Gen 5
                    </div>
                    <div className="pt-1">
                      <span className="text-black-50 pr-2">Processor:</span>
                      i5 9700k
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                className="d-flex align-items-center justify-content-center">
                <div className="px-xl-3">
                  <div className="font-weight-bold font-size-xxl">$ 999,45</div>
                  <div className="font-size-sm">
                    <div className="py-2">
                      <span className="text-black-50 pr-2">Stock:</span>
                      <b>45</b> pcs.
                    </div>
                  </div>
                  <div className="pt-3">
                    <Button size="small" className="btn-first">
                      Add to cart
                    </Button>
                  </div>
                  <div className="pt-3">
                    <Button size="small" className="btn-danger">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'trash-alt']} />
                      </span>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card className="mb-5">
            <div className="card-tr-actions z-over">
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-neutral-danger btn-transition-none btn-pill d-30 btn-icon p-0">
                <FontAwesomeIcon icon={['far', 'heart']} />
              </Button>
            </div>
            <Grid container spacing={6}>
              <Grid
                item
                lg={4}
                className="d-flex align-items-center justify-content-center">
                <div className="divider-v divider-v-md d-none d-lg-block" />
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="card-img-wrapper card-box-hover rounded">
                  <img
                    alt="..."
                    className="img-fluid hover-scale-lg"
                    src={product2}
                  />
                </a>
              </Grid>
              <Grid
                item
                lg={5}
                className="d-flex align-items-center justify-content-center">
                <div className="divider-v divider-v-md d-none d-lg-block" />
                <div className="py-4">
                  <div className="font-weight-bold font-size-xxl">
                    iPhone 11 PRO Max
                  </div>
                  <div className="d-flex flex-wrap pt-2 pb-3">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </div>
                  <div className="font-size-sm text-black-50 pb-3">
                    All components from the General dashboard template can be
                    used in the individual applications pages, without
                    modifications.
                  </div>
                  <div className="font-size-sm">
                    <div className="py-2">
                      <span className="text-black-50 pr-2">Color:</span>
                      Black
                    </div>
                    <div className="py-1">
                      <span className="text-black-50 pr-2">
                        Operating System:
                      </span>
                      MacOS
                    </div>
                    <div className="py-1">
                      <span className="text-black-50 pr-2">Version:</span>
                      Gen 5
                    </div>
                    <div className="pt-1">
                      <span className="text-black-50 pr-2">Processor:</span>
                      i5 9700k
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                className="d-flex align-items-center justify-content-center">
                <div className="px-xl-3">
                  <div className="font-weight-bold font-size-xxl">
                    $ 1299,00
                  </div>
                  <div className="font-size-sm">
                    <div className="py-2">
                      <span className="text-black-50 pr-2">Stock:</span>
                      <b>99</b> pcs.
                    </div>
                  </div>
                  <div className="pt-3">
                    <Button size="small" className="btn-first">
                      Add to cart
                    </Button>
                  </div>
                  <div className="pt-3">
                    <Button size="small" className="btn-danger">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'trash-alt']} />
                      </span>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card className="mb-5">
            <div className="card-tr-actions z-over">
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="btn-neutral-danger btn-transition-none btn-pill d-30 btn-icon p-0">
                <FontAwesomeIcon icon={['far', 'heart']} />
              </Button>
            </div>
            <Grid container spacing={6}>
              <Grid
                item
                lg={4}
                className="d-flex align-items-center justify-content-center">
                <div className="divider-v divider-v-md d-none d-lg-block" />
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="card-img-wrapper card-box-hover rounded">
                  <img
                    alt="..."
                    className="img-fluid hover-scale-lg"
                    src={product3}
                  />
                </a>
              </Grid>
              <Grid
                item
                lg={5}
                className="d-flex align-items-center justify-content-center">
                <div className="divider-v divider-v-md d-none d-lg-block" />
                <div className="py-4">
                  <div className="font-weight-bold font-size-xxl">
                    iPad PRO 13" 2019
                  </div>
                  <div className="d-flex flex-wrap pt-2 pb-3">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </div>
                  <div className="font-size-sm text-black-50 pb-3">
                    All components from the General dashboard template can be
                    used in the individual applications pages, without
                    modifications.
                  </div>
                  <div className="font-size-sm">
                    <div className="py-2">
                      <span className="text-black-50 pr-2">Color:</span>
                      Black
                    </div>
                    <div className="py-1">
                      <span className="text-black-50 pr-2">
                        Operating System:
                      </span>
                      MacOS
                    </div>
                    <div className="py-1">
                      <span className="text-black-50 pr-2">Version:</span>
                      Gen 5
                    </div>
                    <div className="pt-1">
                      <span className="text-black-50 pr-2">Processor:</span>
                      i5 9700k
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                className="d-flex align-items-center justify-content-center">
                <div className="px-xl-3">
                  <div className="font-weight-bold font-size-xxl">$ 399,34</div>
                  <div className="font-size-sm">
                    <div className="py-2">
                      <span className="text-black-50 pr-2">Stock:</span>
                      <b>21</b> pcs.
                    </div>
                  </div>
                  <div className="pt-3">
                    <Button size="small" className="btn-first">
                      Add to cart
                    </Button>
                  </div>
                  <div className="pt-3">
                    <Button size="small" className="btn-danger">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['far', 'trash-alt']} />
                      </span>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <Pagination className="pagination-first" count={10} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
