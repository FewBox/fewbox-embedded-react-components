import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
// Language
import langs from './langs';
// Boot
import Boot from './Boot';
// Page
import DesignPage from './DesignPage';
import './App.scss';

export interface AppProps {
}

class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <IntlProvider locale={'en'} messages={langs('en-us')}>
        <Router>
          <div>
            <Boot />
            <Switch>
              <Route exact path="/" component={DesignPage} />
            </Switch>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;