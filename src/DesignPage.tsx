import * as React from 'react';
import Button, { ButtonType, ButtonCategory } from './Button';
import Divider from './Divider'

export interface IDesignPageProps {
}

class DesignPage extends React.Component<IDesignPageProps, any> {
  public render() {
    return (
      <div>
        <div>
          <Button category={ButtonCategory.Normal} type={ButtonType.Primary} caption="Normal" onClick={() => { console.log('Click Normal.'); }} />
          <Button category={ButtonCategory.Normal} type={ButtonType.Secondory} caption="Text" onClick={() => { console.log('Click Text.'); }} />
        </div>
        <div>
          <Divider />
        </div>
      </div>
    );
  }
}

export default DesignPage;
