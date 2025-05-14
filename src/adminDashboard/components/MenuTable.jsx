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

const MenuTable = ({ dataMenu,
		setSelectedinvalidId, 
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[dataMenu]}
  	  itemsAttrs={[
          {
            id: "name",
            condition: "",
            label: "name",
  		  featureName: "name",
            editable: false
          }
  ,
          {
            id: "desc",
            condition: "",
            label: "desc",
  		  featureName: "desc",
            editable: false
          }
  ,
          {
            id: "price",
            condition: "",
            label: "price",
  		  featureName: "price",
            editable: false
          }
  ,
          {
            id: "category",
            condition: "",
            label: "category",
  		  featureName: "category",
            editable: false
          }
  ]}
        itemsEvents={(menuItem) => [
          
          
          
  ,
          
  <Link to=''>
    <Button 
  	 id="_UB2skCqOEfCzvIuk6NYakQ"
       variant=
                  "secondary"
      //  onClick={() => delete(menuItem)}
    >
       Delete
    </Button>
  </Link>
  
  
        ]}
  	/>
  </>
  )
};

export default MenuTable;
