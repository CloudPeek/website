import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ServicesSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Service({ title, description, category, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{category}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Our Services',
  description:
    'Explore the range of services we offer',
}

export default function ServicesPage() {
  return (
    <SimpleLayout
      title="Our Services"
      intro="We offer a wide range of services to help you achieve your goals.
       Whether you're looking for technical support, business consultation, or creative solutions, we've got you covered."
    >
      <div className="space-y-20">
        <ServicesSection title="Consulting">
          <Service
            href="#"
            title="Technical Consulting"
            description="Get expert technical advice to optimize your AWS infrastructure and improve efficiency."
            category="Consulting"
            cta="Learn more"
          />
        </ServicesSection>
        <ServicesSection title="Products">
          <Service
            href="#"
            title="Mission Control"
            description="Our mission control software helps you to manage the secruity and compliance of your cloud infrastructure."
            category="Operations"
            cta="See the AWS marketplace store"
          />
          <Service
            href="#"
            title="IAM anaylzer"
            description="Discover the IAM roles and policies that are in use across your AWS accounts."
            category="Identity & Access Management"
            cta="See the AWS marketplace store"
          />
        </ServicesSection>
      </div>
    </SimpleLayout>
  )
}
