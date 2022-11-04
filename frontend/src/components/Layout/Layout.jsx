import React, { Fragment , useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../../action/auth';

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
}, []);

  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};


export default connect(null, { checkAuthenticated, load_user })(Layout);
