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
import { useSearchParams } from "react-router";
import FormEditMenu from '../components/FormEditMenu'

import getDataMenuEdit from '../services/getDataMenuEdit'
const UpdateMenuPage = props => {
const [isLoading, setIsLoading] = useState({
	editMenu: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [selectedEditMenuId, setSelectedEditMenuId] = useState(null)
const [dataMenuEdit, setDataMenuEdit] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editMenu: true}))
		const { data: dataMenuEditResponse } = await getDataMenuEdit({ id: selectedEditMenuId  })

	    setDataMenuEdit(dataMenuEditResponse.data)


	    setIsLoading(prev => ({...prev, editMenu: false}))
    }
	selectedEditMenuId &&fetch()
  }, [selectedEditMenuId])

	
	useEffect(() => {
		setTitle("Update Menu Page")
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
		singularName={"Menu"}
		isLoading={isLoading.editMenu}
	>
		{dataMenuEdit ? 
		(<>
		 <FormEditMenu
			{...{ 
				dataMenuEdit
				, setTableMenuDataVersion
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateMenuPage

