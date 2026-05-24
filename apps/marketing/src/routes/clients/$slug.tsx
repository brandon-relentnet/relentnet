import { createFileRoute, notFound } from '@tanstack/react-router'

import { CaseStudyBigStats } from '@/components/caseStudy/CaseStudyBigStats'
import { CaseStudyDetailHero } from '@/components/caseStudy/CaseStudyDetailHero'
import { CaseStudyHeroImage } from '@/components/caseStudy/CaseStudyHeroImage'
import { CaseStudyInlineCta } from '@/components/caseStudy/CaseStudyInlineCta'
import { CaseStudyNarrative } from '@/components/caseStudy/CaseStudyNarrative'
import { CaseStudyProductsRow } from '@/components/caseStudy/CaseStudyProductsRow'
import { CaseStudyPullquote } from '@/components/caseStudy/CaseStudyPullquote'
import { CaseStudyReadMore } from '@/components/caseStudy/CaseStudyReadMore'
import { CaseStudyRegionStrip } from '@/components/caseStudy/CaseStudyRegionStrip'
import { ClosingCtaPair } from '@/components/clients/ClosingCtaPair'
import { caseStudies } from '@/data/caseStudies'

export const Route = createFileRoute('/clients/$slug')({
  loader: ({ params }) => {
    const study = caseStudies.find((s) => s.slug === params.slug)
    if (!study) throw notFound()
    return { study }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    return {
      meta: [
        { title: loaderData.study.meta.title },
        { name: 'description', content: loaderData.study.meta.description },
      ],
    }
  },
  component: ClientDetail,
})

function ClientDetail() {
  const { study } = Route.useLoaderData()

  return (
    <article className="min-h-screen overflow-hidden">
      <CaseStudyDetailHero study={study} />
      <CaseStudyProductsRow study={study} />
      <CaseStudyRegionStrip
        region={study.region}
        companySize={study.companySize}
      />
      <CaseStudyBigStats study={study} />
      <CaseStudyInlineCta />
      <CaseStudyHeroImage study={study} />
      <CaseStudyNarrative study={study} />
      {study.pullquote ? (
        <CaseStudyPullquote pullquote={study.pullquote} />
      ) : null}
      <CaseStudyReadMore currentSlug={study.slug} />
      <ClosingCtaPair />
    </article>
  )
}
