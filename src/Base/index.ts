export const initClassName = (thisRef, classExtention?: () => string | null) => {
  let className = thisRef._reactInternalFiber.type.name.toLowerCase();
  if (classExtention) {
    let extendedClassName = classExtention();
    if (extendedClassName) {
      className = ` ${extendedClassName}`;
    }
  }
  if (typeof (thisRef.props.isVisiable) != 'undefined' && !thisRef.props.isVisiable) {
    className += ' hidden';
  }
  return className;
};

export default interface IBaseProps {
  isVisiable?: boolean;
  isEnable?: boolean;
}