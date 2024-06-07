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
      intro="We offer create services to enable your platfrom"
    >
      <div className="space-y-20">

        <ServicesSection title="Products">
          <Service
            href="https://iam-anaylzer.chollington.co.uk"
            title="IAM anaylzer"
            description="Discover the IAM roles and policies that are in use across your AWS accounts and anaylse the policices using AI."
            category="Identity & Access Management"
            cta="See the AWS marketplace store"
          />
        </ServicesSection>
      </div>
    </SimpleLayout>
  )
}
