import _ from 'lodash';

export const initClassName = (thisRef, classExtention?: () => string | null) => {
  let className = thisRef._reactInternalFiber.elementType.name.toLowerCase();
  if (classExtention) {
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