import sanityClient from '@sanity/client'

export const sanity = sanityClient({
  projectId: process.env.SENTRY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
})
