import sanityClient from '@sanity/client'

export const sanity = sanityClient({
  projectId: 'mpdmjlpg',
  dataset: 'production',
  useCdn: true,
})
