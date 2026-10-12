import { MetadataRoute } from 'next'
import prisma from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bungalowstay.com'

  // Fetch published properties
  // In a real scenario, this would be:
  // const properties = await prisma.property.findMany({ where: { published: true } })
  const properties = [{ slug: 'luxury-hillside-villa', updatedAt: new Date() }]

  const propertyUrls = properties.map((property) => ({
    url: `${baseUrl}/bungalows/${property.slug}`,
    lastModified: property.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const routes = ['', '/bungalows', '/destinations', '/experiences', '/guides', '/about', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.9,
    })
  )

  return [...routes, ...propertyUrls]
}
