import * as React from 'react';
import styles from './RoutingTest.module.scss';
import { IRoutingTestProps } from './IRoutingTestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Route, Link, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';
import MyHome from './MyHomeComponent';
import MYDetails from './Details';
import PageNotFound from './PageNotFound';

export default class RoutingTest extends React.Component<IRoutingTestProps, {}> {
  public render(): React.ReactElement<IRoutingTestProps> {
    return (
      <div className={styles.routingTest}>
        <div className={styles.container}>
          <HashRouter>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                  <li><Link to={'/'} className="nav-link"> MY Home </Link></li>
                  <li><Link to={'/MyDetails'} className="nav-link">My Details</Link></li>
                </ul>
              </nav>
              <hr />
              <Switch>
                <Route sensitive exact path="/" component={MyHome} />
                <Route path="/MyDetails" component={(props) => <MYDetails text="Hello, " {...props} />} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}
