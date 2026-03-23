/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as quoteConfirmation } from './quote-confirmation.tsx'
import { template as quoteNotification } from './quote-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'quote-confirmation': quoteConfirmation,
  'quote-notification': quoteNotification,
}
