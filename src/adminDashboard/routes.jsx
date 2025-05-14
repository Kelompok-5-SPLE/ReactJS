/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import AdminDashboardPage from './containers/AdminDashboardPage'
import MenuManagerPage from './containers/MenuManagerPage'
import CreateNewMenuPage from './containers/CreateNewMenuPage'
import UpdateMenuPage from './containers/UpdateMenuPage'

const adminDashboardRoutes = [
{ 
	path: "/dashboard",
	element: <AdminDashboardPage />,
}

	
,
{ 
	path: "/menumanager",
	element: <MenuManagerPage />,
}

	
,
{ 
	path: "/create",
	element: <CreateNewMenuPage />,
}

	
,
{ 
	path: "/edit-menu/:menuId",
	element: <UpdateMenuPage />,
}

	

]

export default adminDashboardRoutes
