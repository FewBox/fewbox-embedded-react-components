import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
// Language
import langs from './langs';
// Page
import DesignPage from './DesignPage';

export interface AppProps {
}

class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <IntlProvider locale={'en'} messages={langs('en-us')}>
        <Router>
          <div>
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