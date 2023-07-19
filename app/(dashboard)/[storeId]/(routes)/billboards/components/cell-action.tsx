"use client";

import { BillboardColumn } from "./columns";

interface CellActionProps {
  data: BillboardColumn;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return <div>CellAction</div>;
};

export default CellAction;
