/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
const PromoPage = props => {
const [isLoading, setIsLoading] = useState({
	menuwithPromo: false,

	});
	const { setTitle } = useContext(HeaderContext);


	
	useEffect(() => {
		setTitle("Promo Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>

	</Layouts.ViewContainerLayout>
  )
}
export default PromoPage

