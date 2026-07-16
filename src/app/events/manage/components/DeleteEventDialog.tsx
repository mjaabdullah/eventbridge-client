"use client";

import { Button, Modal, useOverlayState } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";

interface DeleteEventDialogProps {
  eventId: string;
  eventTitle: string;
}

const DeleteEventDialog = ({ eventId, eventTitle }: DeleteEventDialogProps) => {
  const state = useOverlayState();

  const handleDeleteEvent = (id: string) => {
    console.log(id);
    // TODO: Implement delete logic (server action / API call) later.
  };

  return (
    <>
      <Button variant="danger" className="flex-1" onPress={state.open}>
        <FiTrash2 className="size-4" />
        Delete
      </Button>

      <Modal.Backdrop isOpen={state.isOpen}>
        <Modal.Container>
          <Modal.Dialog>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Delete Event
              </h2>
              <p className="mt-2 text-sm text-foreground/60">
                Are you sure you want to delete{" "}
                <span className="font-medium text-foreground">
                  {eventTitle}
                </span>
                ? This action cannot be undone.
              </p>

              <div className="mt-6 flex justify-end gap-3">
                <Button variant="secondary" onPress={state.close}>
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  onPress={() => {
                    handleDeleteEvent(eventId);
                    state.close();
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
};

export default DeleteEventDialog;
