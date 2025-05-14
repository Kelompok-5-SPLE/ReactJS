/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import OrderTotalPrice from '../components/OrderTotalPrice'
const OrderPage = props => {
const [isLoading, setIsLoading] = useState({
	orderTotalPrice: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("OrderPage")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/order/modify
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Modify
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"OrderTotalPrice"}
	singularName={""}
	items={{}}
	isLoading={isLoading.orderTotalPrice}
	isCorrelatedWithAnotherComponent={false}
>
	<OrderTotalPrice {...{ data : {  }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default OrderPage

