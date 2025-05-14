/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
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
import saveMenu from '../services/saveMenu'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormCreateNewMenu = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveMenu({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/menumanager`)
  	notifySuccess(`Save Menu berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Create New Menu" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="menuName"
		        name="menuName"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="menuName"
		            placeholder="Masukkan menuname"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="menuDesc"
		        name="menuDesc"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="menuDesc"
		            placeholder="Masukkan menudesc"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="menuPrice"
		        name="menuPrice"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="menuPrice"
		            placeholder="Masukkan menuprice"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="menuCategory"
		        name="menuCategory"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="menuCategory"
		            placeholder="Masukkan menucategory"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button id="_yveiYCqMEfCzvIuk6NYakQ" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormCreateNewMenu
