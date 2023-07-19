"use client";

import { useParams } from "next/navigation";

import { APIAlert } from "@/components/ui/apiAlert";
import useOrigin from "@/hooks/useOrigin";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

const ApiList: React.FC<ApiListProps> = ({ entityName, entityIdName }) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <APIAlert
        title="GET"
        description={`${baseUrl}/${entityName}`}
        variant="public"
      />
      <APIAlert
        title="GET"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant="public"
      />
      <APIAlert
        title="POST"
        description={`${baseUrl}/${entityName}`}
        variant="admin"
      />
      <APIAlert
        title="PATCH"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant="admin"
      />
      <APIAlert
        title="DELETE"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant="admin"
      />
    </>
  );
};

export default ApiList;
