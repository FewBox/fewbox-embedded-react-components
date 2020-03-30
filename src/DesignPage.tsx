import * as React from 'react';
import Button from './Button';

export interface IDesignPageProps {
}

class DesignPage extends React.Component<IDesignPageProps, any> {
  public render() {
    return (
      <div>
        <div>
          <Button caption="OK" onClick={() => { console.log('Click OK.'); }} />
        </div>
      </div>
    );
  }
}

export default DesignPage;
