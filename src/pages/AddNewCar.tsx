import PageContainer from '@/components/ui/PageContainer'
import PageHeading from '@/components/ui/PageHeading'
import '@/components/NewCarForm'
import NewCarForm from '@/components/NewCarForm'

export default function AddNewCar() {
  return (
    <PageContainer>
      <PageHeading name="Add New Car" />
      <NewCarForm/>
    </PageContainer>
  )
}
