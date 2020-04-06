import * as React from 'react';
import Button, { ButtonType, ButtonCategory } from './Button';
import Divider from './Divider'

export interface IDesignPageProps {
}

class DesignPage extends React.Component<IDesignPageProps, any> {
  public render() {
    return (
      <div>
        <Divider />
        <div>
          <Button category={ButtonCategory.Normal} type={ButtonType.Primary} caption="Normal" onClick={() => { console.log('Click Normal.'); }} />
          <Button category={ButtonCategory.Text} type={ButtonType.Secondory} caption="Text" onClick={() => { console.log('Click Text.'); }} />
        </div>
        <Divider />
      </div>
    );
  }
}

export default DesignPage;
