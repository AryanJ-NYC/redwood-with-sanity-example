import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = sanityClient({
  projectId: process.env.SENTRY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source)
}
