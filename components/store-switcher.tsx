"use client";

import { Store } from "@prisma/client";
import { UseStoreModal } from "@/hooks/UseStateModal";
import { useParams, useRouter } from "next/navigation";

import { PopoverTrigger } from "@/components/ui/popover";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitcherProps) => {
  const storeModal = UseStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id, 
  }));

  return <div>StoreSwitcher</div>;
};

export default StoreSwitcher;
