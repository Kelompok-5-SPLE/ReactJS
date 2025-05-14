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
import saveVoucher from '../services/saveVoucher'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormInputVoucherCode = ({ 
	dataBinding
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataBinding })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    invalid({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/voucher`)
  	notifySuccess(`Save Voucher berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Input Voucher Code" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="voucherCode"
		        name="voucherCode"
		        control={control}
				rules={{ required: "Harap masukkan vouchercode" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="VoucherCode"
		            placeholder="Masukkan vouchercode"
		            defaultValue={dataBinding.voucherCode}	            fieldState={fieldState}
					{...field}
					isRequired={true}
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

export default FormInputVoucherCode
