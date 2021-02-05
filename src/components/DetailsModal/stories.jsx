import DetailsModal from '.'
import comicDetails from 'utils/tests/comicDetailsDataMock'

export default {
  title: 'DetailsModal',
  component: DetailsModal,
  argTypes: {
    comicDetails: {
      type: ''
    }
  },
  args: {
    comicDetails: {
      ...comicDetails
    }
  }
}

export function Default(args) { return <DetailsModal {...args} /> }
