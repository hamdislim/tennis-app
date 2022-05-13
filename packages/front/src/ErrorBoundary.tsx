import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
    hasError: ConstrainBoolean;
}
interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<
    {
        children?: ReactNode;
    },
    ErrorBoundaryState
> {
    constructor(props: { children?: ReactNode;}) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render(): React.ReactNode {
        // eslint-disable-next-line react/destructuring-assignment
        if (this.state.hasError) {
            return <p>Loading failed! Please reload.</p>;
        }

        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children;
    }
}
export default ErrorBoundary;
