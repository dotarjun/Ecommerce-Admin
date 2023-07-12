"use client";

import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm: React.FC<SettingsFormProps> = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage Store Preferences" />
        <Button variant="destructive" size="icon" onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      
    </>
  );
};

export default SettingsForm;
