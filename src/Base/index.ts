import _ from 'lodash';

export const initClassName = (thisRef, classExtention: string | (() => string | null)) => {
  let className = '';
  if (typeof (classExtention) == 'string') {
    className = classExtention;
  }
  else {
    let extendedClassName = classExtention();
    if (extendedClassName) {
      className = ` ${extendedClassName}`;
    }
  }
  if (typeof (thisRef.props.isVisiable) != 'undefined' && !thisRef.props.isVisiable) {
    className += ' hidden';
  }
  return _.trim(className);
};

export default interface IBaseProps {
  isVisiable?: boolean;
  isEnable?: boolean;
}