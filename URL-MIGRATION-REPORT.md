# Arcmen URL Migration - Final Changes

## Client-approved interior URL migrations

- /mr-raja-family -> /interior-design-projects/mr-raja-family
- /mr-baskaran-family -> /interior-design-projects/mr-baskaran-family
- /mr-raguraman-family -> /interior-design-projects/mr-raguraman-family
- /mr-mohan-family -> /interior-design-projects/mr-mohan-family
- /mr-manikandan-family -> /interior-design-projects/mr-manikandan-family
- /mr-dhanasekar-family -> /interior-design-projects/mr-dhanasekar-family
- /3bhk-apartment-adayar-interior -> /interior-design-projects/mrs-nithya-srinivasan
- /mrs-mohan -> /interior-design-projects/mrs-mohan
- /mr-santhosh-family -> /interior-design-projects/mr-santhosh-family
- /mr-harish-family -> /interior-design-projects/mr-harish-family
- /3bhk-apartment-velacherry-interior -> /interior-design-projects/mr-rama-elangovan
- /individual-house-kknagar-interior -> /interior-design-projects/mr-srinath-kanya
- /individual-duplex-house-annanagar-interior -> /interior-design-projects/mr-arun-dev
- /individual-house-perambur-interior -> /interior-design-projects/mrs-porchelvi
- /mr-kandhan-family -> /interior-design-projects/mr-kandhan-family
- /nbs-vijay-shankar-family -> /interior-design-projects/nbs-vijay-shankar-family

## Client-approved architectural URL migrations

All listed root-level architectural project URLs now 301 to their
/architectural-projects/... equivalents.

## Other migrations

- /interior-designing-company-in-chennai -> /residential-interior-designers-in-chennai
- /modular-kitchen -> /modular-kitchen-chennai

## Additional safety fix

- Unknown interior project slugs now call notFound() instead of reading
  titleUrl from an undefined project.
- The KK Nagar legacy architectural duplicate route is redirected to
  /interior-design-projects/mr-srinath-kanya.
- Migrated project data slugs and internal project links were updated.
- Migrated old URLs are excluded from next-sitemap.
- Client-approved new architectural dynamic URLs are explicitly included
  in next-sitemap.
- The modular-kitchen-chennai layout now uses the standard site Header so
  the new URL has visible navigation.
- Stale generated sitemap/robots files were removed so they regenerate
  during the production build.

## Validation performed

- next.config.mjs syntax checked successfully with Node.
- next-sitemap.config.js syntax checked successfully with Node.
- 34 permanent redirects are configured (33 client mappings + 1 legacy
  KK Nagar architectural duplicate).
- All client-recommended migrated URLs resolve to a corresponding route or
  dynamic route in the application.
