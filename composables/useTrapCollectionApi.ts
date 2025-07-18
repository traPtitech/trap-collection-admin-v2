import * as generateApi from '@/generated-api';
import { Configuration } from '@/generated-api';

export const useTrapCollectionApi = () => {
  const runtimeConfig = useRuntimeConfig();

  // Node environment
  const nodeEnv =
    runtimeConfig.public.nodeEnv ||
    ('development' as 'development' | 'production');

  const URL = nodeEnv === 'production' ? runtimeConfig.public.apiUrl : '/proxy';

  console.log('API URL:', URL);

  const config = new Configuration({
    basePath: URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  return {
    Edition: new generateApi.EditionApi(config),
    Game: new generateApi.GameApi(config)
  };
};
