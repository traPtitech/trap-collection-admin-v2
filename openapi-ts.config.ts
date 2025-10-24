import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input:
    'https://raw.githubusercontent.com/traPtitech/trap-collection-server/main/docs/openapi/v2.yaml',
  output: 'api-client'
});
