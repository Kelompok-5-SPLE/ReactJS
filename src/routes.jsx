import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import menuRoutes from "@/menu/routes";
import voucherRoutes from "@/voucher/routes";
// import voucherRoutes from "@/voucher/routes";
import adminDashboardRoutes from "@/adminDashboard/routes";
import promoRoutes from "@/promo/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...menuRoutes, 
	...voucherRoutes, 
	...voucherRoutes, 
	...adminDashboardRoutes, 
	...promoRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
