import * as React from 'react';
import { initClassName } from '../Base';
import './style.scss';
import { IconSize, Icon } from '..';

export enum ButtonCategory {
  Normal,
  Text,
  Icon
}

export enum ButtonType {
  Primary,
  Secondory
}

export interface IButtonProps {
  category?: ButtonCategory;
  type?: ButtonType;
  caption: string;
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
        default:
          break;
      }
      return className;
    });

    let content = this.props.category == ButtonCategory.Icon ? <Icon icon={this.props.caption} size={this.props.iconSize} /> : <span>{this.props.caption}</span>
    return (
      <button className={className} onClick={this.props.onClick} type="button">
        {content}
      </button>
    );
  }
}
