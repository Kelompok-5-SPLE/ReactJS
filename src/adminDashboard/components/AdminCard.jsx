/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const AdminCard = ({ dataAdmin,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataAdmin]}
  	
  	itemsAttrs={[
          {
            id: "username",
            condition: "",
            label: "username",
  		  featureName: "username",
            editable:  false 
          }
  ]}
      itemsEvents={(adminItem) => [
  	]}
    />
  )	
};

export default AdminCard;
