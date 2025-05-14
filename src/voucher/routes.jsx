/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import VouchersPage from './containers/VouchersPage'
import InputVoucherCodePage from './containers/InputVoucherCodePage'

const voucherRoutes = [
{ 
	path: "/voucher",
	element: <VouchersPage />,
}

	
,
{ 
	path: "/voucher/:id",
	element: <InputVoucherCodePage />,
}

	

]

export default voucherRoutes
