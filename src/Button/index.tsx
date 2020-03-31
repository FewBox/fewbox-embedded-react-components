import * as React from 'react';
import './style.scss';

export enum ButtonCategory {
  Normal,
  Text
}

export enum ButtonType {
  Primary,
  Secondory
}

export interface IButtonProps {
  category: ButtonCategory;
  type: ButtonType;
  caption: string;
  onClick: () => void;
}

export default class Button extends React.PureComponent<IButtonProps> {
  public render() {
    let className;
    switch (this.props.category) {
      case ButtonCategory.Normal:
        className = 'fb-btn-normal';
      case ButtonCategory.Text:
        className = 'fb-btn-text';
    }
    switch (this.props.type) {
      case ButtonType.Primary:
        className += ' fb-btn-primary';
      case ButtonType.Secondory:
        className += ' fb-btn-secondary';
    }
    return (
      <button className={className} onClick={this.props.onClick} type="button">
        <span>{this.props.caption}</span>
      </button>
    );
  }
}
