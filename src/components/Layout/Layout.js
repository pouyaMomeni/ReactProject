import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";
import RedirectPage from "../../pages/RedirectPage";
// styles
import useStyles from "./styles";

// components
// pages
// context
import { useLayoutState } from "../../context/LayoutContext";
import Neo from "../../pages/Tests/NeoTest/Neo";
import TestResult from "../../pages/Result/NeoTest/TestResult";
import CustomHeader from "../Header/CustomHeader";
import StartTest from "../../pages/StartTest/StartTest";
import { PrivateRoute, PublicRoute } from "../App";
import { useUserState } from "../../context/UserContext";
import Footer from "../Footer/Footer";
import Enrich2 from "../../pages/Tests/EnrichTest/enrich";
import EnrichResult from "../../pages/Result/AiTest/EnrichResult";
import ResultGhq from "../../pages/Result/GhqTest";
// import NeoCode from "../../pages/Enrich/NeoCode";
import PageNotFound from "../Error/PageNotFound";
import EqTest from "../../pages/Tests/EqTest/Eq";
import GhqTest from "../../pages/Tests/GhqTest/ghq";
import Fp16Result from "../../pages/Result/Fp16";
import Scl90rTest from "../../pages/Tests/Scl90Test/Scl90r";
import SituationPage from "../../pages/Situation";
import Glaser from '../../pages/Tests/GlaserTest/glaser'
import Fp16 from "../../pages/Tests/Fp16/fp16";
import ResultGLaser from "../../pages/Result/GlaserTest";
import ResultEq from "../../pages/Result/EqTest";
import ResultScl90 from "../../pages/Result/Scl90Test";
// import TestEnrichResult from "../../pages/Enrich/EnrichResult";
import MbtiTest from "../../pages/Tests/MbtiTest/mbti";

import LandingPage from "../../pages/landing";
import ResultMbti from "../../pages/Result/Mbti";
import PsychologicalSystemPage from "../../pages/StartTest/PsychologicalSystem";
import AiSystemPage from "../../pages/Result/AiSystemTest/index";
import AiSystemPageMain from "../../pages/StartTest/AiSystem/index";
import EnrichResultPage from "../../pages/Result/Enrich";
import NeoPageResult from "../../pages/Result/NeoTest";
import NeoNewPage from "../../pages/Result/NeoNew";
function Layout(props) {
  var classes = useStyles();

  const { isAuthenticated } = useUserState();
  // global
  var layoutState = useLayoutState();

  return (

      <>
        {/* <CustomHeader/> */}
          <Switch>
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              path="/enrich"
              component={Enrich2}
            />
            <PublicRoute
              isAuthenticated={false}
              path="/situation"
              component={SituationPage}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/neo"
              component={Neo}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/eq-i"
              component={EqTest}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/ghq"
              component={GhqTest}
            />

            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/glaser"
              component={Glaser}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/scl-90-r"
              component={Scl90rTest}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/16fp"
              component={Fp16}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              exact
              path="/mbti"
              component={MbtiTest}
            />
            {/* Result */}
            {/* <PrivateRoute
              isAuthenticated={isAuthenticated}
              path="/result"
              component={TestResult}
            /> */}
            {/* <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultEnrich"
              component={TestEnrichResult}
            /> */}
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultFp16"
              component={Fp16Result}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultGhq"
              component={ResultGhq}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultNeoPage"
              component={NeoNewPage}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultGlaser"
              component={ResultGLaser}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultEq"
              component={ResultEq}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultScl90"
              component={ResultScl90}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultMbti"
              component={ResultMbti}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/resultEenrichSingle"
              component={EnrichResultPage}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/AiSystemResult/:man/:woman"
              component={AiSystemPage}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path="/AiSystem"
              component={AiSystemPageMain}
            />
            
            {/* <PublicRoute
              isAuthenticated={false}
              exact
              path={"/neo/:code"}
              component={NeoCode}
            /> */}
            <PublicRoute
              isAuthenticated={isAuthenticated}
              exact
              path={"/start"}
              component={StartTest}
            />
            <PublicRoute
              isAuthenticated={isAuthenticated}
              exact
              path={"/AiSystem"}
              component={AiSystemPage}
            />
            <PublicRoute
              isAuthenticated={isAuthenticated}
              exact
              path={"/PsychologicalSystem"}
              component={PsychologicalSystemPage}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path={"/enrichResult/:man/:woman"}
              component={EnrichResult}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path={"/redirect"}
              component={RedirectPage}
            />
            <PublicRoute
              isAuthenticated={false}
              exact
              path={"/landing"}
              component={LandingPage}
            />
            <Route path={"/notfound"} component={PageNotFound} />
            <Route render={() => <Redirect to={"/notfound"} />} />
          </Switch>

        <Switch>
          <Route path={"/AiSystem"} />
          <Route path={"/PsychologicalSystem"} />
          <Route path={"/neo"} />
          <Route path={"/eq-i"} />
          <Route path={"/enrich"} />
          <Route path={"/ghq"} />
          <Route path={"/glaser"} />
          <Route path={"/16fp"} />
          <Route path={"/scl-90-r"} />
          <Route path={"/mbti"} />
          <Route path={"/situation"} />
          <Route path={"/resultGhq"} />
          <Route path={"/resultEq"} />
          <Route path={"/resultScl90"} />
          <Route path={"/resultFp16"} />
          <Route path={"/resultMbti"} />
          <Route path={"/resultGlaser"} />
          <Route path={"/resultEnrich"} />
          <Route path={"/resultEenrichSingle"} />
          <Route path={"/AiSystem"} />
          <Route path={"/resultNeoPage"} />
          <Route path={"/AiSystemResult/:man/:woman"} />
          {/* <Route path={"/neo/:code"} /> */}
          <Route path={"/notfound"} />
          <Route path={"/redirect"} />
          <Route path={"/landing"} />
          <Route component={Footer} />
        </Switch>
      </>

  );
}

export default withRouter(Layout);
