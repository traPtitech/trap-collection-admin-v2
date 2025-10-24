import { http, HttpResponse } from 'msw';
import type { User, GetGamesResponse, GameInfoWithGenres } from '~/api-client';

const BASE_URL = '/api/v2';

// Mock user data
const mockUser: User = {
  id: 'mock-user-id-123',
  name: 'mockuser'
};

// Mock games data
const mockGames: GameInfoWithGenres[] = [
  {
    id: 'game-1',
    name: 'Test Game 1',
    description: 'This is a test game',
    genres: ['Action', 'Adventure'],
    visibility: 'public',
    createdAt: new Date().toISOString()
  },
  {
    id: 'game-2',
    name: 'Test Game 2',
    description: 'Another test game',
    genres: ['Puzzle'],
    visibility: 'public',
    createdAt: new Date().toISOString()
  }
];

export const handlers = [
  // Get current user (authentication check)
  http.get(`${BASE_URL}/users/me`, () => {
    return HttpResponse.json(mockUser);
  }),

  // OAuth endpoints - simulate successful authentication
  http.get(`${BASE_URL}/oauth2/code`, () => {
    // Simulate OAuth redirect by redirecting to callback with mock code
    return HttpResponse.redirect('/callback?code=mock-auth-code');
  }),

  http.get(`${BASE_URL}/oauth2/callback`, () => {
    // Simulate successful token exchange
    return new HttpResponse(null, {
      status: 204,
      headers: {
        'Set-Cookie': 'mock-session=authenticated; Path=/; HttpOnly'
      }
    });
  }),

  // Get games list
  http.get(`${BASE_URL}/games`, ({ request }) => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    const paginatedGames = mockGames.slice(offset, offset + limit);

    const response: GetGamesResponse = {
      num: mockGames.length,
      games: paginatedGames
    };

    return HttpResponse.json(response);
  }),

  // Get users list (if needed)
  http.get(`${BASE_URL}/users`, () => {
    return HttpResponse.json([mockUser]);
  })
];
