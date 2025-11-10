import { useContext, useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { AuthContext } from '@/context/AuthenticationContext'
import PageContainer from '@/components/container/PageContainer'
import PageHeading from '@/components/ui/PageHeading'
import FormInput from '@/components/ui/FormInput'
import FormSelect from '@/components/ui/FormSelect'
import Button from '@/components/ui/Button'
import { AppRoutes } from '@/types/AppRoutesType'
import useAddNewCar from '@/hooks/useAddNewCar'
import InformUserDialog from '@/components/ui/InformUserDialog'
import { useNavigate } from 'react-router-dom'

export default function AddNewCar() {
  const { logout } = useContext(AuthContext)
  const [showInfoDialog, setShowInfoDialog] = useState(true)
  const navigate = useNavigate()
  const [{ error: authError, loading: loadAuth }] = useAuth()
  const { handleAddNewCar, loadingAddNewCar, errorAddingNewCar, addedNewCarSuccessfully } =
    useAddNewCar()
  useEffect(() => {
    if (authError) {
      logout?.()
    }
  }, [loadAuth])

  return (
    <PageContainer>
      <PageHeading name="Add New Car" />
      <form onSubmit={handleAddNewCar} className="md:px-20">
        <FormInput
          labelName="Name"
          inputType="text"
          inputName="carName"
          inputPlaceHolder="e.g. My Nice Moni Car"
        />
        <FormSelect
          labelName="Type"
          selectName="carType"
          selectOptionOne="Car 550"
          selectOptionTwo="Car Prime"
          selectOptionThree="Car Cross"
        />
        <div className="flex">
          <FormInput
            labelName="License Plate"
            inputType="text"
            inputName="carLicensePlate"
            inputPlaceHolder="e.g. M-XY 123"
          />
          <FormInput
            labelName="Horse Power"
            inputType="number"
            inputName="carHosePower"
            inputPlaceHolder="110"
          />
        </div>
        <FormSelect
          labelName="Fuel Type"
          selectName="carFuelType"
          selectOptionOne="Electric"
          selectOptionTwo="Petrol"
          selectOptionThree="Diesel"
        />
        <FormInput
          labelName="Additional Information"
          inputType="text"
          inputName="carAdditionalInformation"
          inputPlaceHolder="e.g. No smoking"
        />
        {errorAddingNewCar && (
          <p className="py-5 text-sm text-warn-user">
            There was an error adding the new car, please try again.
          </p>
        )}
        <div className="mt-8 flex justify-center gap-5 px-7">
          <Button title="Cancel" disabled={loadingAddNewCar} to={AppRoutes.seeMyCars} />
          <Button
            title={loadingAddNewCar ? 'Loading' : 'Add Car'}
            disabled={loadingAddNewCar}
            variant="filled"
          />
        </div>
      </form>
      {addedNewCarSuccessfully && (
        <InformUserDialog
          showDialog={showInfoDialog}
          onclose={() => {
            setShowInfoDialog(false)
            navigate(AppRoutes.seeMyCars)
          }}
          message="The new car was added successfully"
        />
      )}
    </PageContainer>
  )
}
