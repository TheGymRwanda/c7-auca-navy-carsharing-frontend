import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function WarnUserDialog({
  deleteWarning,
  onclose,
  deleteCar,
}: {
  deleteWarning: boolean
  onclose: () => void
  deleteCar: () => void
}) {
  return (
    <Dialog open={deleteWarning} onClose={onclose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4">
        <DialogPanel className="max-w-lg space-y-4 rounded-md bg-input p-12">
          <DialogTitle className="text-center font-bold">Delete Car</DialogTitle>
          <Description className="text-lg text-white">Do you want to delete this car?</Description>
          <div className="flex items-center justify-between">
            <button className="rounded-md bg-white p-2" onClick={onclose}>
              Cancel
            </button>
            <button
              className="rounded-md bg-header-color p-2 font-semibold text-warn-user "
              onClick={deleteCar}
            >
              Delete
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
