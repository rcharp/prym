import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface QuoteNotificationProps {
  name?: string
  phone?: string
  email?: string
  helpWith?: string
}

const QuoteNotificationEmail = ({ name, phone, email, helpWith }: QuoteNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New quote request from {name || 'a customer'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Quote Request</Heading>
        <Text style={text}>You have a new quote request from the website:</Text>
        <Section style={infoBox}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || 'N/A'}</Text>
          <Text style={label}>Phone</Text>
          <Text style={value}>{phone || 'N/A'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || 'N/A'}</Text>
          <Text style={label}>Needs Help With</Text>
          <Text style={value}>{helpWith || 'N/A'}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: QuoteNotificationEmail,
  subject: (data: Record<string, any>) => `New Quote Request from ${data.name || 'Website'}`,
  to: 'ktrvr@curbservs.com',
  displayName: 'Quote notification to owner',
  previewData: { name: 'John Smith', phone: '9412715612', email: 'john@example.com', helpWith: 'Yard maintenance and cleanup' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Montserrat', Arial, sans-serif" }
const container = { padding: '30px 25px' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: '#1a3a2a', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 20px' }
const infoBox = { backgroundColor: '#f5f5f0', borderRadius: '8px', padding: '20px', margin: '0 0 20px' }
const label = { fontSize: '12px', color: '#888', fontWeight: 'bold' as const, textTransform: 'uppercase' as const, margin: '12px 0 2px', lineHeight: '1.2' }
const value = { fontSize: '15px', color: '#1a3a2a', margin: '0 0 8px', lineHeight: '1.4' }
