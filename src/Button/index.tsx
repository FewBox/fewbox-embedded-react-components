import * as React from 'react';
import { initClassName } from '../Base';
import './style.scss';
import { IconSize, Icon } from '..';

export enum ButtonCategory {
  Normal,
  Text,
  Icon,
  Link
}

export enum ButtonType {
  Primary,
  Secondory
}

export interface IButtonProps {
  category?: ButtonCategory;
  type?: ButtonType;
  caption: string | JSX.Element;
  iconSize?: IconSize;
  onClick: () => void;
}

export default class Button extends React.PureComponent<IButtonProps> {
  public render() {
    let className = initClassName(this, () => {
      let className;
      switch (this.props.type) {
        case ButtonType.Primary:
          className = 'button-primary';
          break;
        case ButtonType.Secondory:
          className = 'button-secondary';
          break;
        default:
          className = '';
          break;
      }
      switch (this.props.category) {
        case ButtonCategory.Normal:
          className += ' button-normal';
          break;
        case ButtonCategory.Text:
          className += ' button-text';
          break;
        case ButtonCategory.Icon:
          className += ' button-icon';
          break;
        case ButtonCategory.Link:
          className += ' button-link';
          break;
        default:
          break;
      }
      return className;
    });

    let content;
    if (this.props.category == ButtonCategory.Icon && typeof (this.props.caption) == 'string') {
      content = <Icon icon={this.props.caption} size={this.props.iconSize} />;
    }
    else {
      content = this.props.caption;
    }
    return (
      <button className={className} onClick={this.props.onClick} type="button">
        {content}
      </button>
    );
  }
}
