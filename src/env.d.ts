/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NEW_ENROLL_FORM_WEBHOOK_URL: string;
  readonly PORTAL_API_KEY: string;
  readonly CP_ACCOUNT_RANDOM_ID: string;
  readonly NEW_CONTACT_US_FORM_WEBHOOK_URL: string;
  readonly NEW_DISCOVERY_FLIGHT_FORM_WEBHOOK_URL: string;
  readonly NEW_PRO_FLIGHT_PROGRAM_URL: string;
  readonly NEW_LEASEBACK_PROGRAM_URL: string;
  
  
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}