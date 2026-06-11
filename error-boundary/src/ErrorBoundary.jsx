import { Component } from "react";

export default class ErrorBoundary extends Component {
    state = {hasError: false}

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <div>Out of order</div>
        }
        return this.props.children
    }
}