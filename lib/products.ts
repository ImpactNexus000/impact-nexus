export type ProductStatus = 'live' | 'development'

export type Product = {
  name: string
  description: string
  status: ProductStatus
  href: string
  linkLabel: string
}

export const products: Product[] = [
  {
    name: 'ArrivaUK',
    description:
      'A digital platform simplifying the arrival and settlement experience for newcomers to the UK — from documentation to local services.',
    status: 'development',
    href: '#',
    linkLabel: 'Learn more',
  },
  {
    name: 'UnitrackPay',
    description:
      'A smart payment and tracking solution for university students and institutions — enabling transparent, frictionless fee management.',
    status: 'development',
    href: '#',
    linkLabel: 'Learn more',
  },
  {
    name: 'Mhiras Collection',
    description:
      'A curated thrift e-commerce platform making pre-loved fashion accessible and sustainable — built for conscious shoppers.',
    status: 'live',
    href: 'https://mhirascollection.com',
    linkLabel: 'Visit store',
  },
]
