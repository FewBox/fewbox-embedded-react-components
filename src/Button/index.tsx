import * as React from 'react';
import './style.scss';

export interface IButtonProps {
  caption: string;
  onClick: ()=>void;
}

export default class Button extends React.PureComponent<IButtonProps> {
  public render() {
    return (
      <button className=".fb-button" onClick={this.props.onClick}>
        {this.props.caption}
      </button>
    );
  }
}
