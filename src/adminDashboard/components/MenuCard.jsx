/*
	Generated on 07/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";

import { useAuth } from "@/commons/auth";
import { Button } from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const MenuCard = ({ dataMenu, setSelectedinvalidId }) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentCardLayout
      items={[dataMenu]}
      itemsAttrs={[
        {
          id: "name",
          condition: "",
          label: "name",
          featureName: "name",
          editable: false,
        },
        {
          id: "desc",
          condition: "",
          label: "desc",
          featureName: "desc",
          editable: false,
        },
        {
          id: "price",
          condition: "",
          label: "price",
          featureName: "price",
          editable: false,
        },
        {
          id: "category",
          condition: "",
          label: "category",
          featureName: "category",
          editable: false,
        },
      ]}
      itemsEvents={(menuItem) => [
        ,
        // eslint-disable-next-line react/jsx-key
        <Link to="">
          <Button
            variant="secondary"
            onClick={() => setSelectedinvalidId(menuItem.id)}
          >
            Delete
          </Button>
        </Link>,
      ]}
    />
  );
};

export default MenuCard;
