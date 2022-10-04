import React from 'react';

import { ConfigForm } from '../components/config/form';
import { ConfigNavigator } from '../components/config/navigator';

export function ConfigPage() {
	return (
		<>
			<ConfigNavigator />
			<ConfigForm />
		</>
	)
}