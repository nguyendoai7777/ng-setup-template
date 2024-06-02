import type { Routes } from '@angular/router';
import { InsteadComponent } from '@components/instead/instead.component';
import { ListenerComponent } from '@components/listener/listener.component';

const mainRoutes: Routes = [
	{
		path: 'instead',
		component: InsteadComponent
	},
	{
		path: 'listener',
		component: ListenerComponent
	}
];
export default mainRoutes;
