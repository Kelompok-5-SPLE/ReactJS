/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const VouchersCard = ({ vouchersData,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[vouchersData]}
  	
  	itemsAttrs={[
          {
            id: "voucherDescription",
            condition: "",
            label: "Voucher Description",
  		  featureName: "voucherDescription",
            editable: false
          }
  ]}
      itemsEvents={(vouchersItem) => [
        
        <Link to={`/vouchers/${vouchersItem.id}`}>
          <Button
        	id="_bXeHMCHmEfCHXrqDtvt3yA"
            size="sm"
            variant=
                "primary"
          >
            Enter Code
          </Button>
        </Link>
        
        
  	]}
    />
  )	
};

export default VouchersCard;
