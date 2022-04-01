import { Redirect, Route, Switch } from "react-router-dom"

import React from "react"
import Stake from '../pages/Stake'
import Bond from '../pages/Bond'
import GovernancePage from "../pages/Governance"
import DashboardPage from "../pages/Dashboard"
import Treasury from "../pages/Dashboard/treasury"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/dashboard/treasury" component={Treasury} />

      <Route exact path="/swap" component={Bond} />
      <Route exact path="/stake" component={Stake} />
      <Route exact path="/upgrade" component={GovernancePage} />
      <Route render={() => <Redirect to="/"/>}/>
    </Switch>
  )
}
