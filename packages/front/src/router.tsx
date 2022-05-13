import React, { Suspense } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes as Switch,
    Navigate,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import ErrorBoundary from './ErrorBoundary';

const Home = React.lazy(() => import('./containers/home'));
const Details = React.lazy(() => import('./containers/details'));

export default function Routes() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Spin />}>
                <Router>
                    <Switch>
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/details/:playerId"
                            element={<Details />}
                        />
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Switch>
                </Router>
            </Suspense>
        </ErrorBoundary>
    );
}
