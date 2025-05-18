"use client";

import { notFound } from "next/navigation";

import { useParams } from "next/navigation";
import { services } from "../components/servicesData";
import ServiceDetailTable from "../components/ServiceDetailTable";

export default function ServiceDetailPage() {
  const params = useParams();
  const packageId = parseInt(params.id as string, 10);
  const service = services.find((item) => item.id === packageId);

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <ServiceDetailTable service={service} />
    </div>
  );
}
