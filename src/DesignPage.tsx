import * as React from 'react';
import './DesignPage.scss';
import { FormattedMessage } from 'react-intl';
import Button, { ButtonType, ButtonCategory } from './Button';
import Divider from './Divider';
import Alert from './Alert';
import Icon, { IconSize } from './Icon';

export interface IDesignPageProps {
}

class DesignPage extends React.Component<IDesignPageProps, any> {
  public render() {
    return (
      <div className="designpage">
        <Divider />
        <div>
          <a href="">link</a>
          <button>button</button>
          <button><a href="">link button</a></button>
        </div>
        <Divider />
        <div>
          {/*<Icon icon="close" />*/}<Icon icon="fewbox" size={IconSize.Large} /><Icon icon="close" size={IconSize.Small} /><Icon icon="close" size="20px" />
        </div>
        <Divider />
        <div>
          <Button category={ButtonCategory.Normal} type={ButtonType.Primary} caption={<FormattedMessage id="Button.Caption_Normal" />} onClick={() => { console.log('Click Normal.'); }} />
          <Button category={ButtonCategory.Text} type={ButtonType.Secondory} caption="Text" onClick={() => { console.log('Click Text.'); }} />
          <Button category={ButtonCategory.Icon} caption="close" iconSize={IconSize.Large} onClick={() => { console.log('Click Icon.'); }} />
          <Button category={ButtonCategory.Link} caption={<a href="">link button</a>} onClick={() => { console.log('Click Link.'); }} />
        </div>
        <Divider />
        <div>
          <Alert caption="Hello FewBox!" closeAction={() => { }} />
        </div>
      </div>
    );
  }
}

export default DesignPage;
