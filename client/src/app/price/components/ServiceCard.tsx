"use client"

import Link from "next/link"

interface ServiceCardProps {
  service: {
    id: number
    title: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/price/${service.id}`}>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
      </div>
    </Link>
  )
}