import * as React from 'react';
import IBase, { initClassName } from '../Base';
import './style.scss';
import { Button, ButtonCategory, IconSize } from '..';

export interface IAlertProps extends IBase {
  caption: string | JSX.Element;
  closeAction: () => void;
}

export default class Alert extends React.PureComponent<IAlertProps> {
  public render() {
    let className = initClassName(this, 'alert');
    return (
      <div className={className}>
        <span>{this.props.caption}</span>
        <Button category={ButtonCategory.Icon} caption="close" iconSize={IconSize.Large} onClick={this.props.closeAction} />
      </div>
    );
  }
}
