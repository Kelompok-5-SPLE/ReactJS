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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MenuTable from "../components/MenuTable";

import getDataMenu from '../services/getDataMenu'
const MenuManagerPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableMenu: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataMenu, setDataMenu] = useState()
	
	
	
	const [tableMenuDataVersion, setTableMenuDataVersion] = useState(0)

	useEffect(() => {
		if (!tableMenuParams) return

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMenu: true}))
				const { data: dataMenu } = await getDataMenu()
				setDataMenu(dataMenu.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMenu: false}))
			}
		}
		fetchData()
  	}, [tableMenuDataVersion])

	
	useEffect(() => {
		setTitle("Menu Manager Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/create
			  	`}>
			  		<Button id="_dpo7oCqNEfCzvIuk6NYakQ" className="p-2" variant="primary">
			  		  Create New Menu
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Menu"}
	singularName={"Menu"}
	items={[dataMenu]}
	isLoading={isLoading.tableMenu}
>
	<MenuTable
		dataMenu={dataMenu}
		setSelectedinvalidId={setSelectedinvalidId}
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default MenuManagerPage

