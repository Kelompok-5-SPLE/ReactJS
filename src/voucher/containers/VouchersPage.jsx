/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import VouchersTable from "../components/VouchersTable";

import getVouchersData from '../services/getVouchersData'
const VouchersPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableVouchers: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [vouchersData, setVouchersData] = useState()
	
	
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableVouchers: true}))
				const { data: vouchersData } = await getVouchersData()
				setVouchersData(vouchersData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableVouchers: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Vouchers Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Vouchers"}
	singularName={"Vouchers"}
	items={[vouchersData]}
	isLoading={isLoading.tableVouchers}
>
	<VouchersTable
		vouchersData={vouchersData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default VouchersPage

