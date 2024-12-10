'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/app/dashboard/page"

export function SubscribeCard() {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Subscribe to our plans</h3>
            <p className="text-gray-500">Get exclusive access to our contents!</p>
          </div>
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Rocket illustration"
            width={150}
            height={150}
            className="h-[150px] w-auto"
          />
        </div>
      </CardContent>
    </Card>
  )
}

