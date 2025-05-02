/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import createOrder from '../services/createOrder';

import * as Layouts from "@/commons/layouts";


const OrderSummary = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  	
    const submit = async () => {
      await createOrder({
      });
  	navigate('invalid');
    }
    
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        
      ]}
      itemsEvents={[
            <Button
              variant="secondary"
              onClick={() => submit()}
            >
              Submit
            </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default OrderSummary;
