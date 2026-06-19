import { setupServer } from 'msw/node';
import { createHandlers } from './handlers';

// SSR (Node) では絶対 URL でマッチさせる必要があるため、baseUrl を渡してハンドラを生成する。
export const createMockServer = (baseUrl: string) =>
  setupServer(...createHandlers(baseUrl));
