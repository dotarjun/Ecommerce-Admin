"use client"

import { UseStoreModal } from "@/hooks/UseStateModal";
import { Modal } from "@/components/ui/modal";

const storeModal = () => {
    const storeModal = UseStoreModal();

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

export default storeModal;
