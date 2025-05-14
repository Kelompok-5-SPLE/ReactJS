/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const VouchersTable = ({ vouchersData,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[vouchersData]}
  	  itemsAttrs={[
          {
            id: "voucherDescription",
            condition: "",
            label: "voucherDescription",
  		  featureName: "voucherDescription",
            editable: false
          }
  ]}
        itemsEvents={(vouchersItem) => [
          
          <Link to={`/voucher/${vouchersItem.id}`}>
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
  </>
  )
};

export default VouchersTable;
