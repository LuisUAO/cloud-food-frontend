import React from 'react';
import { HelpForm } from '../components/help/form';
import { HelpNavigator } from '../components/help/navigator';

export function HelpPage() {
	return (
		<>
			<HelpNavigator />
			<HelpForm />
		</>
	)
}