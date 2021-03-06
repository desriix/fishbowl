import GameRoutes from "components/GameRoutes"
import Layout from "components/Layout"
import Home from "pages/Home"
import Pending from "pages/Pending"
import * as React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import routes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={routes.root} component={Home} />
          <Route
            exact
            path={routes.game.pending}
            render={({ match }) => {
              return (
                <Pending
                  joinCode={match.params.joinCode.toLocaleUpperCase()}
                ></Pending>
              )
            }}
          />
          <Route
            path={routes.game.root}
            render={({ match }) => {
              return (
                <GameRoutes
                  joinCode={match.params.joinCode.toLocaleUpperCase()}
                ></GameRoutes>
              )
            }}
          />
          <Route path="*">
            <Redirect to={routes.root}></Redirect>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
