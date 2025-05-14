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
import AdminCard from "../components/AdminCard";

import getDataAdmin from '../services/getDataAdmin'
const AdminDashboardPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listAdmin: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataAdmin, setDataAdmin] = useState()
	
	
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listAdmin: true}))
				const { data: dataAdmin } = await getDataAdmin()
				setDataAdmin(dataAdmin.data)
			} finally {
				setIsLoading(prev => ({...prev, listAdmin: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Admin Dashboard Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/menumanager
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Manage Menu
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Admin"}
	singularName={"Admin"}
	items={[dataAdmin]}
	isLoading={isLoading.listAdmin}
>
	<AdminCard
		dataAdmin={dataAdmin}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AdminDashboardPage

