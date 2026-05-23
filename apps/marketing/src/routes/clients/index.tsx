import { createFileRoute } from '@tanstack/react-router'

import { ClientsByEngagementType } from '@/components/clients/ClientsByEngagementType'
import { ClientsByIndustry } from '@/components/clients/ClientsByIndustry'
import {
  ClientsClosingCta,
  clientsCta,
} from '@/components/clients/ClientsClosingCta'
import { ClientsFeaturedEngagement } from '@/components/clients/ClientsFeaturedEngagement'
import { ClientsHero, clientsIntro } from '@/components/clients/ClientsHero'
import { ClientsLogoWall } from '@/components/clients/ClientsLogoWall'
import { ClientsPortraitGrid } from '@/components/clients/ClientsPortraitGrid'
import { ClientsResultsBand } from '@/components/clients/ClientsResultsBand'
import { ClientsWhatWeBuild } from '@/components/clients/ClientsWhatWeBuild'

export const Route = createFileRoute('/clients/')({
  head: () => ({
    meta: [
      { title: 'Our Clients | RelentNet Case Studies' },
      {
        name: 'description',
        content:
          'Diagnostic-first proof from RelentNet client engagements, showing how diagnosed workflow friction becomes useful systems and clearer operations.',
      },
    ],
  }),
  component: ClientsIndex,
})

const PORTRAIT_GRID_ID = 'client-stories'

// Re-exported for the migrated test file.
export { clientsIntro, clientsCta }

function ClientsIndex() {
  return (
    <div className="min-h-screen overflow-hidden">
      <ClientsHero scrollTargetId={PORTRAIT_GRID_ID} />
      <div id={PORTRAIT_GRID_ID}>
        <ClientsPortraitGrid />
      </div>
      <ClientsResultsBand />
      <ClientsLogoWall />
      <ClientsByEngagementType />
      <ClientsFeaturedEngagement />
      <ClientsByIndustry />
      <ClientsWhatWeBuild />
      <ClientsClosingCta scrollTargetId={PORTRAIT_GRID_ID} />
    </div>
  )
}
