import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRIMISC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRIMISC_ACCESS_TOKEN
    }
  )

  return prismic
}