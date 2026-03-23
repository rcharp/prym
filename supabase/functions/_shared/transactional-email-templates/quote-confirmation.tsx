import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "PricedRight Yards & More"

interface QuoteConfirmationProps {
  name?: string
}

const QuoteConfirmationEmail = ({ name }: QuoteConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your quote request — we'll be in touch soon!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thanks, ${name}!` : 'Thank you!'}
        </Heading>
        <Text style={text}>
          We've received your quote request and our team will review it shortly. 
          We typically respond within 24 hours.
        </Text>
        <Text style={text}>
          If you need immediate assistance, feel free to give us a call at{' '}
          <strong>(941) 271-5612</strong>.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Best regards,<br />
          The {SITE_NAME} Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuoteConfirmationEmail,
  subject: 'We received your quote request!',
  displayName: 'Quote confirmation to customer',
  previewData: { name: 'John' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Montserrat', Arial, sans-serif" }
const container = { padding: '30px 25px' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: '#1a3a2a', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 20px' }
const hr = { borderColor: '#e5e5e5', margin: '25px 0' }
const footer = { fontSize: '13px', color: '#888', lineHeight: '1.5', margin: '0' }
