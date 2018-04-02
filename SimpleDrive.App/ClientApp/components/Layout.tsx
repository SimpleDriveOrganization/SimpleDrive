import * as React from 'react';
import { NavMenu } from './NavMenu';
import Hidden from 'material-ui/Hidden';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <NavMenu />
                { this.props.children }
            </div>
        );
    }
}
