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
    },
    isShown: true,
  }
}

export function Default(args) { return <DetailsModal {...args} /> }
