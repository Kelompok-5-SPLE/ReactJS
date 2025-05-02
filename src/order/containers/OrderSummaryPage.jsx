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

import OrderSummary from '../components/OrderSummary'
const OrderSummaryPage = props => {
const [isLoading, setIsLoading] = useState({
	orderSummary: false,

	});
	const { setTitle } = useContext(HeaderContext);



	
	useEffect(() => {
		setTitle("OrderSummaryPage")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"OrderSummary"}
	singularName={""}
	items={{}}
	isLoading={isLoading.orderSummary}
	isCorrelatedWithAnotherComponent={false}
>
	<OrderSummary {...{ data : {  }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default OrderSummaryPage

