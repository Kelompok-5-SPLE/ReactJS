/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateMenu from '../services/updateMenu'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditMenu = ({ 
	dataMenuEdit
	, setTableMenuDataVersion
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataMenuEdit })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    invalid({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	setTableMenuDataVersion(prevVersion => prevVersion +1)
  	notifySuccess(`Update Menu berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Edit Menu" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="name"
		        name="name"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="name"
		            placeholder="Masukkan name"
		            defaultValue={dataMenuEdit.name}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="desc"
		        name="desc"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="desc"
		            placeholder="Masukkan desc"
		            defaultValue={dataMenuEdit.desc}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="price"
		        name="price"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="price"
		            placeholder="Masukkan price"
					type="number"
		            defaultValue={dataMenuEdit.price}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="category"
		        name="category"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="category"
		            placeholder="Masukkan category"
		            defaultValue={dataMenuEdit.category}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormEditMenu
