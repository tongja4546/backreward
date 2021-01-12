import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import {
  LeftSidebar,
  MinimalLayout,
  PresentationLayout
} from './layout-blueprints';

// Example Pages

import Dashboard from './example-pages/Dashboard';
import Orders from './example-pages/Orders';
import Reward from './example-pages/Reward';
import Category from './example-pages/Category';
import Products from './example-pages/Products';
import Customers from './example-pages/Customers';
import ProductsFilters from './example-pages/ProductsFilters';
import Transactions from './example-pages/Transactions';
import Gamelog from './example-pages/Gamelog';
import Userlog from './example-pages/Userlog';
import Pointlog from './example-pages/Txnpoint';
import Depositlog from './example-pages/Txncash';

import Settings from './example-pages/Settings';
import Infomation from './example-pages/Infomation';
import PageLoginIllustration from './example-pages/PageLoginIllustration';
import PageRegisterIllustration from './example-pages/PageRegisterIllustration';
import PageRecoverIllustration from './example-pages/PageRecoverIllustration';
import PageError404 from './example-pages/PageError404';
import Login from './pages/login';

const Homepage = lazy(() => import('./example-pages/Homepage'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };

  const SuspenseLoading = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      let timeout = setTimeout(() => setShow(true), 300);
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    return (
      <>
        <AnimatePresence>
          {show && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}>
              <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
                <div className="d-flex align-items-center flex-column px-4">
                  <ClimbingBoxLoader color={'#3c44b1'} loading={true} />
                </div>
                <div className="text-muted font-size-xl text-center pt-3">
                  Please wait while we load the live preview examples
                  <span className="font-size-lg d-block text-dark">
                    This live preview instance can be slower than a real
                    production build!
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            <Redirect exact from="/" to="/Dashboard" />
            <Route path="/Login" component={Login} />
            <Route
              path={[
                '/Dashboard',
                '/Orders',
                '/Reward',
                '/Products',
                '/Customers',
                '/Transactions',
                '/Infomation',
                '/Settings',
                '/Category',   
                '/Gamelog',  
                '/Userlog',  
                '/Pointlog',     
                '/Depositlog',              
                '/Login'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/Orders" component={Orders} />
                    <Route path="/Reward" component={Reward} />
                    <Route path="/Category" component={Category} />
                    <Route path="/Products" component={Products} />
                    <Route path="/Customers" component={Customers} />
                    <Route path="/Gamelog" component={Gamelog} />            
                    <Route path="/Userlog" component={Userlog} />      
                    <Route path="/Pointlog" component={Pointlog} />      
                    <Route path="/Depositlog" component={Depositlog} />      
                    <Route path="/Transactions" component={Transactions} />
                    <Route path="/Infomation" component={Infomation} />                    
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>

            <Route
              path={[
                '/PageLoginIllustration',
                '/PageRegisterIllustration',
                '/PageRecoverIllustration',
                '/PageError404'
              ]}>
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/PageLoginIllustration"
                      component={PageLoginIllustration}
                    />
                    <Route
                      path="/PageRegisterIllustration"
                      component={PageRegisterIllustration}
                    />
                    <Route
                      path="/PageRecoverIllustration"
                      component={PageRecoverIllustration}
                    />
                    <Route path="/PageError404" component={PageError404} />
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
