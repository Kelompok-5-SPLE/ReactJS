/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react';
import OrderPage from './containers/OrderPage'
import OrderModifyPage from './containers/OrderModifyPage'
import OrderSummaryPage from './containers/OrderSummaryPage'

const orderRoutes = [
{ 
	path: "/order/modify",
	element: <OrderModifyPage />,
}

	
,
{ 
	path: "/order",
	element: <OrderPage />,
}

	
,
{ 
	path: "/order/summary",
	element: <OrderSummaryPage />,
}

	

]

export default orderRoutes
