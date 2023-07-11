"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UseStoreModal } from "@/hooks/UseStateModal";
import { Modal } from "@/components/ui/modal";

const formSchema = z.object({
    name: z.string().min(1),
})

const StoreModal = () => {
    const storeModal = UseStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    })

    const onSubmit = async (vaues: z.infer<typeof formSchema>) => {
        // TODO: Create Score
    }

    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage your inventory"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >

        </Modal>
    )
};

export default StoreModal;
