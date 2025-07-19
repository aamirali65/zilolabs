// app/service/[id]/page.jsx

import { services } from '../../lib/servicesData';
import ServiceDetailPage from '../../components/ServiceDetailPage';

export default function Page({ params }) {
  const service = services.find((s) => s.id === parseInt(params.id));
  return <ServiceDetailPage service={service} />;
}