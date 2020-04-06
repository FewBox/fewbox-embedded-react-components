import * as React from 'react';
import IBase, { initClassName } from '../Base';
import './style.scss';
import { CloseIcon, FewBoxIcon } from './icons';

export enum IconSize {
    Small, // 8px
    Medium, // 12px
    Large // 16px
}

export interface IIconProps extends IBase {
    icon?: string;
    svg?: any;
    size?: string | IconSize;
}

export default class Icon extends React.PureComponent<IIconProps> {
    createSvg(svg) {
        return { __html: svg };
    }
    public render() {
        let style;
        let className = initClassName(this, () => {
            if (typeof (this.props.size) != 'undefined') {
                if (typeof (this.props.size) === 'string') {
                    style = { width: this.props.size };
                    return null;
                }
                else {
                    //console.log(this.props.size);
                    switch (this.props.size as IconSize) {
                        case IconSize.Small:
                            return 'icon-small';
                        case IconSize.Medium:
                            return 'icon-medium';
                        case IconSize.Large:
                            return 'icon-large';
                        default:
                            return 'icon-small';
                    }
                }
            }
            else {
                return null;
            }
        });
        // load icon
        let svg;
        if (this.props.icon) {
            switch (this.props.icon) {
                case 'close':
                    svg = CloseIcon;
                    break;
                case 'fewbox':
                    svg = FewBoxIcon;
                    break;
                default:
                    break;
            }
        }
        else {
            svg = this.props.svg;
        }

        return (
            <div style={style} className={className} dangerouslySetInnerHTML={this.createSvg(svg)}>
            </div>
        );
    }
}
