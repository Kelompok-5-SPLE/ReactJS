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
import { useSearchParams } from "react-router";
import FormInputVoucherCode from '../components/FormInputVoucherCode'

import getDataBinding from '../services/getDataBinding'
const InputVoucherCodePage = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	inputVoucherCode: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, inputVoucherCode: true}))
		const { data: dataBindingResponse } = await getDataBinding({ id  })

	    setDataBinding(dataBindingResponse.data)


	    setIsLoading(prev => ({...prev, inputVoucherCode: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Input Voucher Code Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Voucher"}
		isLoading={isLoading.inputVoucherCode}
	>
		{dataBinding ? 
		(<>
		 <FormInputVoucherCode
			{...{ 
				dataBinding
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default InputVoucherCodePage

