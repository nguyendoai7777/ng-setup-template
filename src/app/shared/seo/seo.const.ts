export const EJsonLDType = {
  Product: 'Product',
  Organization: 'Organization',
  Article: 'Article'
} as const;

export const EOGType = {
  // --- Cơ bản ---
  website: 'website',
  article: 'article',
  profile: 'profile',
  book: 'book',
  product: 'product',

  // --- Video ---
  'video.movie': 'video.movie',
  'video.episode': 'video.episode',
  'video.tv_show': 'video.tv_show',
  'video.tv_season': 'video.tv_season',
  'video.tv_episode': 'video.tv_episode',
  'video.other': 'video.other',

  // --- Music ---
  'music.song': 'music.song',
  'music.album': 'music.album',
  'music.playlist': 'music.playlist',
  'music.radio_station': 'music.radio_station',

  // --- Article nâng cao ---
  'article.news': 'article.news',
  'article.blog': 'article.blog',

  // --- Place / Event / Business ---
  place: 'place',
  event: 'event',
  'business.business': 'business.business',
  'restaurant.restaurant': 'restaurant.restaurant',
  'product.group': 'product.group'
} as const;
