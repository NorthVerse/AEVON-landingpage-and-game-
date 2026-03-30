import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.state = { hasError: true, error, errorInfo };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-screen h-screen bg-aevon-charcoal flex items-center justify-center p-8">
                    <div className="max-w-2xl bg-red-900/20 border border-red-500/50 rounded-2xl p-8">
                        <h1 className="text-3xl font-bold text-red-400 mb-4">Something went wrong</h1>
                        <p className="text-aevon-cream/80 mb-4">
                            The application encountered an error. Please check the console for details.
                        </p>
                        {this.state.error && (
                            <pre className="bg-black/50 p-4 rounded-lg text-xs text-red-300 overflow-auto max-h-64">
                                {this.state.error.toString()}
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        )}
                        <button
                            onClick={() => window.location.href = '/'}
                            className="mt-6 px-6 py-3 bg-aevon-teal hover:bg-aevon-teal/80 text-white font-bold rounded-full transition-all"
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
