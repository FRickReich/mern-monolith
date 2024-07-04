import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const portalDiv: HTMLElement | null = document.getElementById('root');

createRoot(portalDiv!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
