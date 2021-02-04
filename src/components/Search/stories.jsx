import Search from '.'

export default {
  title: 'Search',
  component: Search,
  argTypes: {
    comicData: {
      type: ''
    }
  }
}

export const Default = (args) => <Search {...args}/>

Default.args = {
  comicData: [
    {
      title: 'Spider Man',
      variantDescription: 'Anka Mighty Men Variant',
      imgPath: 'http://i.annihil.us/u/prod/marvel/i/mg/b/a0/600f0ecde5b41.jpg',
      imgAlt: 'Spider Man Issue'
    },
    {
      title: 'Spider Man',
      variantDescription: 'Anka Mighty Men Variant',
      imgPath: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      imgAlt: 'Spider Man Issue'
    },
    {
      title: 'Avengers',
      variantDescription: 'Avengers Description',
      imgPath: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      imgAlt: 'Avengers Issue'
    }
  ]
}
