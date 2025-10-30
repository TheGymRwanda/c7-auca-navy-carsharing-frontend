import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function InformUserDialog({
  message,
  onclose,
  showDialog,
}: {
  showDialog: boolean
  onclose: () => void
  message: string
}) {
  return (
    <Dialog open={showDialog} onClose={onclose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4">
        <DialogPanel className="max-w-lg space-y-4 rounded-md bg-input p-12">
          <DialogTitle className="text-center font-bold">Info</DialogTitle>
          <Description className="text-lg text-white">{message}</Description>
          <div className="mx-auto w-[fit-content]">
            <button className="rounded-md bg-white p-2" onClick={onclose}>
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
