import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import { AuthProvider } from './context/AuthContext';
import ProtectedComponent from './components/ProtectedComponent/ProtectedComponent';
import LoginForm from './components/LoginForm/LoginForm';

import { NotFound, Dashboard } from './pages';
import Header from './components/Header/Header';

const App: React.FC = () => {
	return (
		<Router basename="/">
			<AuthProvider>
				<div className="App">
					<Header />
					<Routes>
						<Route
							path="/"
							element={<Navigate to="/dashboard" replace />}
						/>
						<Route path="/login" element={<LoginForm />} />
						<Route
							path="/protected"
							element={
								<PrivateRoute
									element={<ProtectedComponent />}
								/>
							}
						/>

						<Route
							path="/dashboard"
							element={<PrivateRoute element={<Dashboard />} />}
						/>

						<Route
							path="/*"
							element={<Navigate to="/dashboard" replace />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
					test
				</div>
			</AuthProvider>
		</Router>
	);
};

export default App;
