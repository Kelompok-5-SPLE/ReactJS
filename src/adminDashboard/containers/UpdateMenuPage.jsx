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
import FormEditMenu from '../components/FormEditMenu'

import getDataMenu from '../services/getDataMenu'
// import FormEditMenu from '../components/FormEditMenu'

// import getDataMenu from '../services/getDataMenu'
const UpdateMenuPage = props => {
const [isLoading, setIsLoading] = useState({
	editMenu: false,
	editMenu: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataMenu, setDataMenu] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editMenu: true}))
		const { data: dataMenuResponse } = await getDataMenu({   })

	    setDataMenu(dataMenuResponse.data)


	    setIsLoading(prev => ({...prev, editMenu: false}))
    }
	fetch()
  }, [])
const [selectedEditMenuId, setSelectedEditMenuId] = useState(null)
// const [dataMenu, setDataMenu] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editMenu: true}))
		const { data: dataMenuResponse } = await getDataMenu({ id: selectedEditMenuId  })

	    setDataMenu(dataMenuResponse.data)


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
		{dataMenu ? 
		(<>
		 <FormEditMenu
			{...{ 
				dataMenu
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>
<Layouts.FormContainerLayout
		singularName={"Menu"}
		isLoading={isLoading.editMenu}
	>
		{dataMenu ? 
		(<>
		 <FormEditMenu
			{...{ 
				dataMenu
				, setTableMenuDataVersion
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateMenuPage

