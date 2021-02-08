import DetailsModal from '.'
import comicDetails from 'utils/tests/comicDetailsMock'

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
    isShown: true
  }
}

export const Default = (args) => <DetailsModal {...args} />
