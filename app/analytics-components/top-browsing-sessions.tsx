'use client'

import { Card, CardContent } from "@/app/dashboard/page"

export function TopBrowsingSessions() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Top Browsing Sessions</h3>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-[#0A0E29] text-white">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="inline-block p-3 bg-white/10 rounded-full">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
            </div>
            <h4 className="font-medium mb-1">Chrome</h4>
            <div className="text-sm text-gray-300 mb-4">Top Browser</div>
            <div className="text-2xl font-bold">3k+</div>
            <div className="text-sm text-gray-300">/sessions</div>
          </CardContent>
        </Card>

        <Card className="bg-[#0A0E29] text-white">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="inline-block p-3 bg-white/10 rounded-full">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
            </div>
            <h4 className="font-medium mb-1">Apple</h4>
            <div className="text-sm text-gray-300 mb-4">Top OS mobile</div>
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-gray-300">/sessions</div>
          </CardContent>
        </Card>

        <Card className="bg-[#0A0E29] text-white">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="inline-block p-3 bg-white/10 rounded-full">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z"/>
                </svg>
              </div>
            </div>
            <h4 className="font-medium mb-1">Windows</h4>
            <div className="text-sm text-gray-300 mb-4">Top OS Platform</div>
            <div className="text-2xl font-bold">1k+</div>
            <div className="text-sm text-gray-300">/sessions</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

