import { exec } from 'child_process';
import { mkdir } from 'fs/promises';
import { resolve } from 'path';
import { promisify } from 'util';

import addApis from './addApis';

const execPromise = promisify(exec);

const SWAGGER_PATH =
  'https://raw.githubusercontent.com/traPtitech/trap-collection-server/main/docs/openapi/v2.yaml';
const GENERATED_DIR = 'generated-api';

// eslint-disable-next-line no-undef
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const generateCmd = [
  npx,
  'openapi-generator-cli',
  'generate',
  '-g',
  'typescript-axios',
  '-i',
  SWAGGER_PATH,
  '-o',
  GENERATED_DIR,
  '--skip-validate-spec',
  '--generate-alias-as-model',
  '--reserved-words-mappings private=private'
];
(async () => {
  const __dirname = resolve();
  await mkdir(resolve(__dirname, '../', GENERATED_DIR), {
    recursive: true
  });

  await execPromise(generateCmd.join(' '));

  // generate Apis class
  // await addApis(GENERATED_DIR);
})();
