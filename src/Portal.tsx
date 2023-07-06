import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode,
}

class Portal extends Component<PortalProps> {

  private el: HTMLDivElement = document.createElement('div');

  public componentDidMount():void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount():void {
    document.body.removeChild(this.el);
  }

  public render(): React.ReactElement<PortalProps> {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;