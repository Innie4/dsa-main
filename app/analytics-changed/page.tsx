'use client';

import  Header  from '@/app/default/signed-inheader'
import { Footer } from '@/app/default/footer'
import { TotalUsersCard } from '@/app/analytics-components/total-users-card'
import { SiteAnalyticsCard } from '@/app/analytics-components/site-analytics-card'
import { BrowserRadarCard } from '@/app/analytics-components/browser-radar-card'
import { UserActivityCard } from '@/app/analytics-components/user-activity-card'
import { TrafficInsightsCard } from '@/app/analytics-components/traffic-insights-card'
import { TopBrowsingSessions } from '@/app/analytics-components/top-browsing-sessions'
import { SubscribeCard } from '@/app/analytics-components/subscribe-card'

const Analytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
            <div className="md:px-20 lg:px-20 p-4 bg-white">
            <div className="min-h-screen bg-white">
      <Header />
      <main className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TotalUsersCard />
          <SiteAnalyticsCard />
          <BrowserRadarCard />
          <UserActivityCard />
          <TrafficInsightsCard />
        </div>
        <TopBrowsingSessions />
        <SubscribeCard />
      </main>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default  Analytics;

