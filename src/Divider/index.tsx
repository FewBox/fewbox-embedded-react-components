import * as React from 'react';
import './style.scss';

export interface IDividerProps {
}

export default class Divider extends React.PureComponent<IDividerProps> {
  public render() {
    return (
      <div className="fb-divider"></div>
    );
  }
}
