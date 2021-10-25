import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_component/Navbar";
import Footer from "./_component/Footer";

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;

  function LayoutHome(props) {
    return (
      <>
        <Navbar />
        {props.children}
        <Footer />
      </>
    );
  }

  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component}></Route>
    </LayoutHome>
  );
}
