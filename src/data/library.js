const makeThumbs = (videoId) => ({
  high: {
    url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    width: 480,
    height: 360,
  },
  medium: {
    url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
    width: 320,
    height: 180,
  },
  default: {
    url: `https://i.ytimg.com/vi/${videoId}/default.jpg`,
    width: 120,
    height: 90,
  },
});

const channelList = [
  {
    id: 'channel-rick-astley',
    title: 'Rick Astley',
    description: 'Official channel for Rick Astley.',
    thumbId: 'dQw4w9WgXcQ',
    subscriberCount: '3900000',
    videoCount: '210',
  },
  {
    id: 'channel-psy',
    title: 'officialpsy',
    description: 'Official channel for PSY.',
    thumbId: '9bZkp7q19f0',
    subscriberCount: '25000000',
    videoCount: '350',
  },
  {
    id: 'channel-luis-fonsi',
    title: 'Luis Fonsi',
    description: 'Official channel for Luis Fonsi.',
    thumbId: 'kJQP7kiw5Fk',
    subscriberCount: '26000000',
    videoCount: '220',
  },
  {
    id: 'channel-ed-sheeran',
    title: 'Ed Sheeran',
    description: 'Official channel for Ed Sheeran.',
    thumbId: 'JGwWNGJdvx8',
    subscriberCount: '55000000',
    videoCount: '340',
  },
  {
    id: 'channel-adele',
    title: 'Adele',
    description: 'Official channel for Adele.',
    thumbId: 'YQHsXMglC9A',
    subscriberCount: '30000000',
    videoCount: '80',
  },
  {
    id: 'channel-taylor-swift',
    title: 'Taylor Swift',
    description: 'Official channel for Taylor Swift.',
    thumbId: 'nfWlot6h_JM',
    subscriberCount: '57000000',
    videoCount: '280',
  },
  {
    id: 'channel-mark-ronson',
    title: 'Mark Ronson',
    description: 'Official channel for Mark Ronson.',
    thumbId: 'OPf0YbXqDm0',
    subscriberCount: '4000000',
    videoCount: '160',
  },
  {
    id: 'channel-justin-bieber',
    title: 'Justin Bieber',
    description: 'Official channel for Justin Bieber.',
    thumbId: 'fRh_vgS2dFE',
    subscriberCount: '72000000',
    videoCount: '250',
  },
  {
    id: 'channel-katy-perry',
    title: 'Katy Perry',
    description: 'Official channel for Katy Perry.',
    thumbId: 'CevxZvSJLk8',
    subscriberCount: '56000000',
    videoCount: '220',
  },
  {
    id: 'channel-maroon-5',
    title: 'Maroon 5',
    description: 'Official channel for Maroon 5.',
    thumbId: '09R8_2nJtjg',
    subscriberCount: '37000000',
    videoCount: '210',
  },
  {
    id: 'channel-shakira',
    title: 'Shakira',
    description: 'Official channel for Shakira.',
    thumbId: 'pRpeEdMmmQ0',
    subscriberCount: '39000000',
    videoCount: '260',
  },
  {
    id: 'channel-alan-walker',
    title: 'Alan Walker',
    description: 'Official channel for Alan Walker.',
    thumbId: '60ItHLz5WEA',
    subscriberCount: '45000000',
    videoCount: '190',
  },
  {
    id: 'channel-ted',
    title: 'TED',
    description: 'Ideas worth spreading.',
    thumbId: 'iG9CE55wbtY',
    subscriberCount: '24000000',
    videoCount: '5200',
  },
  {
    id: 'channel-jawed',
    title: 'jawed',
    description: 'Videos from Jawed Karim.',
    thumbId: 'jNQXAC9IVRw',
    subscriberCount: '5300000',
    videoCount: '3',
  },
  {
    id: 'channel-hdcyt',
    title: 'HDCYT',
    description: 'Classic viral clips.',
    thumbId: '_OBlgSz8sSM',
    subscriberCount: '950000',
    videoCount: '30',
  },
  {
    id: 'channel-ok-go',
    title: 'OK Go',
    description: 'Official OK Go channel.',
    thumbId: 'dTAAsCNK7RA',
    subscriberCount: '4600000',
    videoCount: '140',
  },
  {
    id: 'channel-spacex',
    title: 'SpaceX',
    description: 'Official SpaceX channel.',
    thumbId: 'wD1O_hz3By4',
    subscriberCount: '7200000',
    videoCount: '300',
  },
  {
    id: 'channel-nasa',
    title: 'NASA',
    description: 'Official NASA channel.',
    thumbId: '21X5lGlDOfg',
    subscriberCount: '11000000',
    videoCount: '2800',
  },
  {
    id: 'channel-rockstar-games',
    title: 'Rockstar Games',
    description: 'Official Rockstar Games channel.',
    thumbId: 'QkkoHAzjnUs',
    subscriberCount: '8800000',
    videoCount: '600',
  },
  {
    id: 'channel-nyan-cat',
    title: 'Nyan Cat',
    description: 'The original Nyan Cat upload.',
    thumbId: 'QH2-TGUlwu4',
    subscriberCount: '320000',
    videoCount: '12',
  },
  {
    id: 'channel-sony-music-india',
    title: 'Sony Music India',
    description: 'Official Sony Music India channel.',
    thumbId: 'BddP6PYo2gs',
    subscriberCount: '62000000',
    videoCount: '3900',
  },
  {
    id: 'channel-lahari-music',
    title: 'Lahari Music',
    description: 'Lahari Music official channel.',
    thumbId: 'OsU0CGZoV8E',
    subscriberCount: '9000000',
    videoCount: '12000',
  },
  {
    id: 'channel-tseries',
    title: 'T-Series',
    description: 'Official T-Series channel.',
    thumbId: 'BBAyRBTfsOU',
    subscriberCount: '260000000',
    videoCount: '22000',
  },
  {
    id: 'channel-guru-randhawa',
    title: 'Guru Randhawa',
    description: 'Official channel for Guru Randhawa.',
    thumbId: 'dZ0fwJojhrs',
    subscriberCount: '12000000',
    videoCount: '220',
  },
  {
    id: 'channel-zack-knight',
    title: 'Zack Knight',
    description: 'Official channel for Zack Knight.',
    thumbId: 'yIIGQB6EMAM',
    subscriberCount: '5800000',
    videoCount: '150',
  },
  {
    id: 'channel-coke-studio',
    title: 'Coke Studio',
    description: 'Coke Studio Pakistan.',
    thumbId: '5Eqb_-j3FDA',
    subscriberCount: '13000000',
    videoCount: '600',
  },
  {
    id: 'channel-blackpink',
    title: 'BLACKPINK',
    description: 'Official BLACKPINK channel.',
    thumbId: 'IHNzOHi8sJs',
    subscriberCount: '95000000',
    videoCount: '450',
  },
  {
    id: 'channel-bts',
    title: 'BTS',
    description: 'Official BTS channel.',
    thumbId: 'gdZLi9oWNZg',
    subscriberCount: '80000000',
    videoCount: '400',
  },
  {
    id: 'channel-rema',
    title: 'Rema',
    description: 'Official channel for Rema.',
    thumbId: 'CQLsdm1ZYAw',
    subscriberCount: '3000000',
    videoCount: '110',
  },
  {
    id: 'channel-ckay',
    title: 'CKay',
    description: 'Official channel for CKay.',
    thumbId: 'D-YDEyuDxWU',
    subscriberCount: '2600000',
    videoCount: '80',
  },
  {
    id: 'channel-pinkfong',
    title: "Pinkfong Baby Shark - Kids' Songs & Stories",
    description: 'Sing-along songs and stories for kids.',
    thumbId: 'XqZsoesa55w',
    subscriberCount: '70000000',
    videoCount: '3200',
  },
  {
    id: 'channel-cocomelon',
    title: 'CoComelon - Nursery Rhymes',
    description: 'Nursery rhymes and kids songs for families.',
    thumbId: 'wV3N-wCRL2k',
    subscriberCount: '170000000',
    videoCount: '1500',
  },
  {
    id: 'channel-maher-zain',
    title: 'Maher Zain',
    description: 'Official channel for Maher Zain.',
    thumbId: 'KfXIF2Mm2Kc',
    subscriberCount: '6500000',
    videoCount: '180',
  },
  {
    id: 'channel-flipperachi',
    title: 'Flipperachi',
    description: 'Khaleeji hip-hop and global collaborations.',
    thumbId: '1XOJFuKHCck',
    subscriberCount: '120000',
    videoCount: '120',
  },
  {
    id: 'channel-shatadru-kabir',
    title: 'Shatadru Kabir',
    description: 'Music from the film Mark and more.',
    thumbId: 'iPNLfS8o5g0',
    subscriberCount: '90000',
    videoCount: '60',
  },
  {
    id: 'channel-osturdu-topics',
    title: 'OSTURDU TOPICS',
    description: 'Pakistani drama OSTs and lyric videos.',
    thumbId: 'f6HQDFoSc9E',
    subscriberCount: '1600',
    videoCount: '120',
  },
  {
    id: 'channel-islam-on-demand',
    title: 'Islam On Demand',
    description: 'Lectures and Islamic education series.',
    thumbId: 'ICu3ITHnBoM',
    subscriberCount: '180000',
    videoCount: '400',
  },
  {
    id: 'channel-digital-mimbar',
    title: 'Digital Mimbar',
    description: 'Talks and reminders about the Quran and Islam.',
    thumbId: 'mT_hyBZXgYc',
    subscriberCount: '75000',
    videoCount: '900',
  },
  {
    id: 'channel-monica',
    title: 'Monica',
    description: 'Video songs and music.',
    thumbId: 'neOasLBWoy0',
    subscriberCount: '320000',
    videoCount: '140',
  },
  {
    id: 'channel-meri-zindagi-ost',
    title: 'Meri Zindagi Hai Tu OST',
    description: 'Official soundtrack and clips.',
    thumbId: 'eRM2reLxN5k',
    subscriberCount: '410000',
    videoCount: '80',
  },
  {
    id: 'channel-merchant-records',
    title: 'Merchant Records',
    description: 'South Indian music label and video songs.',
    thumbId: 'TMY1g8pAktk',
    subscriberCount: '520000',
    videoCount: '420',
  },
  {
    id: 'channel-zikrullah-tv',
    title: 'Zikrullah TV',
    description: 'Quran recitations and Islamic reminders.',
    thumbId: 'tQHAwV9B8hQ',
    subscriberCount: '980000',
    videoCount: '1500',
  },
];

export const channelsById = channelList.reduce((acc, channel) => {
  acc[channel.id] = {
    id: channel.id,
    snippet: {
      title: channel.title,
      description: channel.description,
      thumbnails: {
        high: {
          url: `https://i.ytimg.com/vi/${channel.thumbId}/hqdefault.jpg`,
          width: 480,
          height: 360,
        },
      },
    },
    statistics: {
      subscriberCount: channel.subscriberCount,
      videoCount: channel.videoCount,
    },
  };
  return acc;
}, {});

export const videos = [
  {
    id: 'dQw4w9WgXcQ',
    snippet: {
      title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      description: 'The classic 80s hit that never goes out of style.',
      channelId: 'channel-rick-astley',
      channelTitle: 'Rick Astley',
      publishedAt: '2009-10-25T07:57:33Z',
      thumbnails: makeThumbs('dQw4w9WgXcQ'),
    },
    contentDetails: { duration: 'PT3M33S' },
    statistics: { viewCount: '1600000000', likeCount: '16000000' },
    tags: ['music', 'pop', 'classic', '80s'],
  },
  {
    id: '9bZkp7q19f0',
    snippet: {
      title: 'PSY - GANGNAM STYLE (Official Video)',
      description: 'A global K-pop phenomenon with iconic choreography.',
      channelId: 'channel-psy',
      channelTitle: 'officialpsy',
      publishedAt: '2012-07-15T09:00:00Z',
      thumbnails: makeThumbs('9bZkp7q19f0'),
    },
    contentDetails: { duration: 'PT4M13S' },
    statistics: { viewCount: '5000000000', likeCount: '25000000' },
    tags: ['music', 'pop', 'dance', 'k-pop'],
  },
  {
    id: 'kJQP7kiw5Fk',
    snippet: {
      title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
      description: 'Massive Latin pop hit with a summer vibe.',
      channelId: 'channel-luis-fonsi',
      channelTitle: 'Luis Fonsi',
      publishedAt: '2017-01-12T05:00:00Z',
      thumbnails: makeThumbs('kJQP7kiw5Fk'),
    },
    contentDetails: { duration: 'PT4M42S' },
    statistics: { viewCount: '8200000000', likeCount: '45000000' },
    tags: ['music', 'latin', 'pop'],
  },
  {
    id: 'JGwWNGJdvx8',
    snippet: {
      title: 'Ed Sheeran - Shape of You (Official Music Video)',
      description: 'One of the biggest pop tracks of the decade.',
      channelId: 'channel-ed-sheeran',
      channelTitle: 'Ed Sheeran',
      publishedAt: '2017-01-30T13:00:00Z',
      thumbnails: makeThumbs('JGwWNGJdvx8'),
    },
    contentDetails: { duration: 'PT4M24S' },
    statistics: { viewCount: '6200000000', likeCount: '33000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'YQHsXMglC9A',
    snippet: {
      title: 'Adele - Hello',
      description: 'Adele returns with a powerful ballad.',
      channelId: 'channel-adele',
      channelTitle: 'Adele',
      publishedAt: '2015-10-23T05:00:00Z',
      thumbnails: makeThumbs('YQHsXMglC9A'),
    },
    contentDetails: { duration: 'PT6M07S' },
    statistics: { viewCount: '3100000000', likeCount: '16000000' },
    tags: ['music', 'pop', 'ballad'],
  },
  {
    id: 'nfWlot6h_JM',
    snippet: {
      title: 'Taylor Swift - Shake It Off',
      description: 'Upbeat pop anthem from Taylor Swift.',
      channelId: 'channel-taylor-swift',
      channelTitle: 'Taylor Swift',
      publishedAt: '2014-08-18T15:00:00Z',
      thumbnails: makeThumbs('nfWlot6h_JM'),
    },
    contentDetails: { duration: 'PT4M02S' },
    statistics: { viewCount: '3400000000', likeCount: '21000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'OPf0YbXqDm0',
    snippet: {
      title: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars',
      description: 'Funk-driven chart topper with retro flair.',
      channelId: 'channel-mark-ronson',
      channelTitle: 'Mark Ronson',
      publishedAt: '2014-11-19T06:00:00Z',
      thumbnails: makeThumbs('OPf0YbXqDm0'),
    },
    contentDetails: { duration: 'PT4M31S' },
    statistics: { viewCount: '5200000000', likeCount: '25000000' },
    tags: ['music', 'funk', 'pop'],
  },
  {
    id: 'fRh_vgS2dFE',
    snippet: {
      title: 'Justin Bieber - Sorry (PURPOSE : The Movement)',
      description: 'Dance-focused visual for a pop hit.',
      channelId: 'channel-justin-bieber',
      channelTitle: 'Justin Bieber',
      publishedAt: '2015-10-22T00:00:00Z',
      thumbnails: makeThumbs('fRh_vgS2dFE'),
    },
    contentDetails: { duration: 'PT3M26S' },
    statistics: { viewCount: '3800000000', likeCount: '17000000' },
    tags: ['music', 'pop', 'dance'],
  },
  {
    id: 'CevxZvSJLk8',
    snippet: {
      title: 'Katy Perry - Roar (Official)',
      description: 'High-energy pop anthem with bold visuals.',
      channelId: 'channel-katy-perry',
      channelTitle: 'Katy Perry',
      publishedAt: '2013-09-05T04:00:00Z',
      thumbnails: makeThumbs('CevxZvSJLk8'),
    },
    contentDetails: { duration: 'PT4M30S' },
    statistics: { viewCount: '3900000000', likeCount: '17000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'tVj0ZTS4WF4',
    snippet: {
      title: 'Katy Perry - Dark Horse (Official) ft. Juicy J',
      description: 'Epic pop production with cinematic styling.',
      channelId: 'channel-katy-perry',
      channelTitle: 'Katy Perry',
      publishedAt: '2014-02-20T05:00:00Z',
      thumbnails: makeThumbs('tVj0ZTS4WF4'),
    },
    contentDetails: { duration: 'PT3M50S' },
    statistics: { viewCount: '3600000000', likeCount: '16000000' },
    tags: ['music', 'pop'],
  },
  {
    id: '09R8_2nJtjg',
    snippet: {
      title: 'Maroon 5 - Sugar',
      description: 'A surprise wedding crash with a pop hook.',
      channelId: 'channel-maroon-5',
      channelTitle: 'Maroon 5',
      publishedAt: '2015-01-14T05:00:00Z',
      thumbnails: makeThumbs('09R8_2nJtjg'),
    },
    contentDetails: { duration: 'PT5M01S' },
    statistics: { viewCount: '3900000000', likeCount: '15000000' },
    tags: ['music', 'pop'],
  },
  {
    id: 'pRpeEdMmmQ0',
    snippet: {
      title: 'Shakira - Waka Waka (This Time for Africa) (Official 2010 FIFA World Cup Song)',
      description: 'World Cup anthem with global energy.',
      channelId: 'channel-shakira',
      channelTitle: 'Shakira',
      publishedAt: '2010-06-04T07:00:00Z',
      thumbnails: makeThumbs('pRpeEdMmmQ0'),
    },
    contentDetails: { duration: 'PT3M34S' },
    statistics: { viewCount: '3600000000', likeCount: '15000000' },
    tags: ['music', 'sports', 'worldcup'],
  },
  {
    id: '60ItHLz5WEA',
    snippet: {
      title: 'Alan Walker - Faded',
      description: 'Electronic hit with a cinematic story.',
      channelId: 'channel-alan-walker',
      channelTitle: 'Alan Walker',
      publishedAt: '2015-12-03T12:00:00Z',
      thumbnails: makeThumbs('60ItHLz5WEA'),
    },
    contentDetails: { duration: 'PT3M32S' },
    statistics: { viewCount: '3500000000', likeCount: '27000000' },
    tags: ['music', 'electronic'],
  },
  {
    id: '2Vv-BfVoq4g',
    snippet: {
      title: 'Ed Sheeran - Perfect (Official Music Video)',
      description: 'A romantic ballad from Ed Sheeran.',
      channelId: 'channel-ed-sheeran',
      channelTitle: 'Ed Sheeran',
      publishedAt: '2017-11-09T12:00:00Z',
      thumbnails: makeThumbs('2Vv-BfVoq4g'),
    },
    contentDetails: { duration: 'PT4M40S' },
    statistics: { viewCount: '3900000000', likeCount: '22000000' },
    tags: ['music', 'ballad'],
  },
  {
    id: 'iG9CE55wbtY',
    snippet: {
      title: 'Do schools kill creativity? | Sir Ken Robinson',
      description: 'A classic TED talk about creativity and education.',
      channelId: 'channel-ted',
      channelTitle: 'TED',
      publishedAt: '2007-01-07T00:00:00Z',
      thumbnails: makeThumbs('iG9CE55wbtY'),
    },
    contentDetails: { duration: 'PT19M24S' },
    statistics: { viewCount: '78000000', likeCount: '1800000' },
    tags: ['talks', 'podcast', 'design', 'education'],
  },
  {
    id: 'qp0HIF3SfI4',
    snippet: {
      title: 'How great leaders inspire action | Simon Sinek',
      description: 'Leadership and purpose explained through the Golden Circle.',
      channelId: 'channel-ted',
      channelTitle: 'TED',
      publishedAt: '2009-09-29T00:00:00Z',
      thumbnails: makeThumbs('qp0HIF3SfI4'),
    },
    contentDetails: { duration: 'PT18M07S' },
    statistics: { viewCount: '68000000', likeCount: '1600000' },
    tags: ['talks', 'podcast', 'leadership', 'business'],
  },
  {
    id: 'Ks-_Mh1QhMc',
    snippet: {
      title: 'Your body language may shape who you are | Amy Cuddy',
      description: 'A talk on presence and confidence.',
      channelId: 'channel-ted',
      channelTitle: 'TED',
      publishedAt: '2012-10-01T00:00:00Z',
      thumbnails: makeThumbs('Ks-_Mh1QhMc'),
    },
    contentDetails: { duration: 'PT21M02S' },
    statistics: { viewCount: '72000000', likeCount: '1500000' },
    tags: ['talks', 'podcast', 'psychology'],
  },
  {
    id: 'jNQXAC9IVRw',
    snippet: {
      title: 'Me at the zoo',
      description: 'The very first video uploaded to YouTube.',
      channelId: 'channel-jawed',
      channelTitle: 'jawed',
      publishedAt: '2005-04-23T00:00:00Z',
      thumbnails: makeThumbs('jNQXAC9IVRw'),
    },
    contentDetails: { duration: 'PT19S' },
    statistics: { viewCount: '310000000', likeCount: '15000000' },
    tags: ['classic', 'history', 'viral'],
  },
  {
    id: '_OBlgSz8sSM',
    snippet: {
      title: 'Charlie bit my finger - again!',
      description: 'A classic viral family moment.',
      channelId: 'channel-hdcyt',
      channelTitle: 'HDCYT',
      publishedAt: '2007-05-22T00:00:00Z',
      thumbnails: makeThumbs('_OBlgSz8sSM'),
    },
    contentDetails: { duration: 'PT56S' },
    statistics: { viewCount: '880000000', likeCount: '3400000' },
    tags: ['classic', 'viral', 'comedy'],
  },
  {
    id: 'dTAAsCNK7RA',
    snippet: {
      title: 'OK Go - Here It Goes Again',
      description: 'The treadmill music video that set a new bar for creativity.',
      channelId: 'channel-ok-go',
      channelTitle: 'OK Go',
      publishedAt: '2006-02-12T00:00:00Z',
      thumbnails: makeThumbs('dTAAsCNK7RA'),
    },
    contentDetails: { duration: 'PT3M01S' },
    statistics: { viewCount: '64000000', likeCount: '800000' },
    tags: ['music', 'design', 'creative'],
  },
  {
    id: 'wD1O_hz3By4',
    snippet: {
      title: 'SpaceX Falcon Heavy Test Flight',
      description: 'A landmark moment in commercial spaceflight.',
      channelId: 'channel-spacex',
      channelTitle: 'SpaceX',
      publishedAt: '2018-02-06T00:00:00Z',
      thumbnails: makeThumbs('wD1O_hz3By4'),
    },
    contentDetails: { duration: 'PT33M41S' },
    statistics: { viewCount: '58000000', likeCount: '1200000' },
    tags: ['tech', 'technology', 'space', 'news'],
  },
  {
    id: '21X5lGlDOfg',
    snippet: {
      title: 'NASA Live: Official Stream of NASA TV',
      description: '24/7 coverage of NASA missions, events, and space views.',
      channelId: 'channel-nasa',
      channelTitle: 'NASA',
      publishedAt: '2015-05-19T00:00:00Z',
      thumbnails: makeThumbs('21X5lGlDOfg'),
    },
    contentDetails: { duration: 'PT10H00M00S' },
    statistics: { viewCount: '110000000', likeCount: '900000' },
    tags: ['live', 'space', 'news', 'tech', 'technology'],
  },
  {
    id: 'QkkoHAzjnUs',
    snippet: {
      title: 'Grand Theft Auto V Trailer',
      description: 'The official reveal trailer for GTA V.',
      channelId: 'channel-rockstar-games',
      channelTitle: 'Rockstar Games',
      publishedAt: '2011-11-02T00:00:00Z',
      thumbnails: makeThumbs('QkkoHAzjnUs'),
    },
    contentDetails: { duration: 'PT1M31S' },
    statistics: { viewCount: '98000000', likeCount: '1400000' },
    tags: ['gaming', 'trailer', 'action'],
  },
  {
    id: 'QH2-TGUlwu4',
    snippet: {
      title: 'Nyan Cat [original]',
      description: 'A classic internet animation with an unforgettable tune.',
      channelId: 'channel-nyan-cat',
      channelTitle: 'Nyan Cat',
      publishedAt: '2011-04-05T00:00:00Z',
      thumbnails: makeThumbs('QH2-TGUlwu4'),
    },
    contentDetails: { duration: 'PT3M37S' },
    statistics: { viewCount: '230000000', likeCount: '2100000' },
    tags: ['classic', 'animation', 'music'],
  },
  {
    id: 'BddP6PYo2gs',
    snippet: {
      title: 'Kesariya (From "Brahmastra")',
      description: 'Arijit Singh and Pritam deliver a modern Bollywood classic.',
      channelId: 'channel-sony-music-india',
      channelTitle: 'Sony Music India',
      publishedAt: '2022-07-17T00:00:00Z',
      thumbnails: makeThumbs('BddP6PYo2gs'),
    },
    contentDetails: { duration: 'PT4M29S' },
    statistics: { viewCount: '410000000', likeCount: '5200000' },
    tags: ['india', 'bollywood', 'hindi', 'music', 'romance'],
  },
  {
    id: 'OsU0CGZoV8E',
    snippet: {
      title: 'Naatu Naatu (Full Video Song) | RRR',
      description: 'Explosive Telugu dance anthem from RRR.',
      channelId: 'channel-lahari-music',
      channelTitle: 'Lahari Music',
      publishedAt: '2022-04-11T00:00:00Z',
      thumbnails: makeThumbs('OsU0CGZoV8E'),
    },
    contentDetails: { duration: 'PT3M36S' },
    statistics: { viewCount: '200000000', likeCount: '4300000' },
    tags: ['india', 'telugu', 'music', 'dance', 'bollywood'],
  },
  {
    id: 'BBAyRBTfsOU',
    snippet: {
      title: 'Dhvani Bhanushali - Vaaste',
      description: 'A romantic Hindi hit from T-Series.',
      channelId: 'channel-tseries',
      channelTitle: 'T-Series',
      publishedAt: '2019-04-06T00:00:00Z',
      thumbnails: makeThumbs('BBAyRBTfsOU'),
    },
    contentDetails: { duration: 'PT4M06S' },
    statistics: { viewCount: '1700000000', likeCount: '12000000' },
    tags: ['india', 'hindi', 'music', 'romance', 'bollywood'],
  },
  {
    id: 'dZ0fwJojhrs',
    snippet: {
      title: 'Guru Randhawa - Lahore (Official Video)',
      description: 'Punjabi pop anthem with bold production.',
      channelId: 'channel-guru-randhawa',
      channelTitle: 'Guru Randhawa',
      publishedAt: '2017-12-10T00:00:00Z',
      thumbnails: makeThumbs('dZ0fwJojhrs'),
    },
    contentDetails: { duration: 'PT3M52S' },
    statistics: { viewCount: '1100000000', likeCount: '8000000' },
    tags: ['india', 'punjabi', 'music', 'dance'],
  },
  {
    id: 'n2u81Ujc93g',
    snippet: {
      title: 'Dilbar | Satyameva Jayate',
      description: 'High-energy Bollywood dance track.',
      channelId: 'channel-tseries',
      channelTitle: 'T-Series',
      publishedAt: '2018-07-24T00:00:00Z',
      thumbnails: makeThumbs('n2u81Ujc93g'),
    },
    contentDetails: { duration: 'PT2M14S' },
    statistics: { viewCount: '850000000', likeCount: '6000000' },
    tags: ['india', 'bollywood', 'hindi', 'music', 'dance'],
  },
  {
    id: 'YR12Z8f1Dh8',
    snippet: {
      title: 'Why This Kolaveri Di',
      description: 'The viral Tamil-English hit that took over playlists.',
      channelId: 'channel-sony-music-india',
      channelTitle: 'Sony Music India',
      publishedAt: '2011-11-16T00:00:00Z',
      thumbnails: makeThumbs('YR12Z8f1Dh8'),
    },
    contentDetails: { duration: 'PT4M08S' },
    statistics: { viewCount: '360000000', likeCount: '4800000' },
    tags: ['india', 'tamil', 'music', 'viral'],
  },
  {
    id: 'yIIGQB6EMAM',
    snippet: {
      title: 'Zack Knight & Jasmin Walia - Bom Diggy',
      description: 'An Indo-pop crossover that went global.',
      channelId: 'channel-zack-knight',
      channelTitle: 'Zack Knight',
      publishedAt: '2017-11-23T00:00:00Z',
      thumbnails: makeThumbs('yIIGQB6EMAM'),
    },
    contentDetails: { duration: 'PT3M27S' },
    statistics: { viewCount: '780000000', likeCount: '5200000' },
    tags: ['india', 'bollywood', 'music', 'dance', 'global'],
  },
  {
    id: '5Eqb_-j3FDA',
    snippet: {
      title: 'Pasoori | Ali Sethi x Shae Gill (Coke Studio Season 14)',
      description: 'Coke Studio fusion hit with global reach.',
      channelId: 'channel-coke-studio',
      channelTitle: 'Coke Studio',
      publishedAt: '2022-02-06T00:00:00Z',
      thumbnails: makeThumbs('5Eqb_-j3FDA'),
    },
    contentDetails: { duration: 'PT3M44S' },
    statistics: { viewCount: '600000000', likeCount: '8200000' },
    tags: ['global', 'south-asia', 'music', 'fusion'],
  },
  {
    id: 'IHNzOHi8sJs',
    snippet: {
      title: 'BLACKPINK - DDU-DU DDU-DU (Official Music Video)',
      description: 'Iconic K-pop anthem with bold visuals.',
      channelId: 'channel-blackpink',
      channelTitle: 'BLACKPINK',
      publishedAt: '2018-06-15T00:00:00Z',
      thumbnails: makeThumbs('IHNzOHi8sJs'),
    },
    contentDetails: { duration: 'PT3M31S' },
    statistics: { viewCount: '2200000000', likeCount: '23000000' },
    tags: ['global', 'kpop', 'music', 'pop'],
  },
  {
    id: 'gdZLi9oWNZg',
    snippet: {
      title: 'BTS - Dynamite (Official Music Video)',
      description: 'Bright retro-pop from BTS.',
      channelId: 'channel-bts',
      channelTitle: 'BTS',
      publishedAt: '2020-08-21T00:00:00Z',
      thumbnails: makeThumbs('gdZLi9oWNZg'),
    },
    contentDetails: { duration: 'PT3M19S' },
    statistics: { viewCount: '1900000000', likeCount: '23000000' },
    tags: ['global', 'kpop', 'music', 'pop'],
  },
  {
    id: 'CQLsdm1ZYAw',
    snippet: {
      title: 'Rema - Calm Down (Official Music Video)',
      description: 'Afrobeats crossover hit.',
      channelId: 'channel-rema',
      channelTitle: 'Rema',
      publishedAt: '2022-09-07T00:00:00Z',
      thumbnails: makeThumbs('CQLsdm1ZYAw'),
    },
    contentDetails: { duration: 'PT3M40S' },
    statistics: { viewCount: '1200000000', likeCount: '6400000' },
    tags: ['global', 'afrobeats', 'music'],
  },
  {
    id: 'D-YDEyuDxWU',
    snippet: {
      title: 'CKay - love nwantiti (Ah Ah Ah) [Official Music Video]',
      description: 'Afrobeats hit with a viral chorus.',
      channelId: 'channel-ckay',
      channelTitle: 'CKay',
      publishedAt: '2021-08-20T00:00:00Z',
      thumbnails: makeThumbs('D-YDEyuDxWU'),
    },
    contentDetails: { duration: 'PT3M08S' },
    statistics: { viewCount: '420000000', likeCount: '5500000' },
    tags: ['global', 'afrobeats', 'music'],
  },
  {
    id: 'XqZsoesa55w',
    snippet: {
      title: 'Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children',
      description: 'The viral kids song loved around the world.',
      channelId: 'channel-pinkfong',
      channelTitle: "Pinkfong Baby Shark - Kids' Songs & Stories",
      publishedAt: '2016-06-17T00:00:00Z',
      thumbnails: makeThumbs('XqZsoesa55w'),
    },
    contentDetails: { duration: 'PT2M17S' },
    statistics: { viewCount: '16000000000', likeCount: '45000000' },
    tags: ['kids', 'nursery', 'songs', 'baby', 'education'],
  },
  {
    id: 'wV3N-wCRL2k',
    snippet: {
      title: 'Wheels on the Bus + More Nursery Rhymes & Kids Songs - CoComelon',
      description: 'A compilation packed with classic nursery rhymes.',
      channelId: 'channel-cocomelon',
      channelTitle: 'CoComelon - Nursery Rhymes',
      publishedAt: '2018-06-28T00:00:00Z',
      thumbnails: makeThumbs('wV3N-wCRL2k'),
    },
    contentDetails: { duration: 'PT32M56S' },
    statistics: { viewCount: '1800000000', likeCount: '5200000' },
    tags: ['kids', 'nursery', 'songs', 'family', 'education'],
  },
  {
    id: 'KfXIF2Mm2Kc',
    snippet: {
      title: 'Maher Zain - Insha Allah (Official Music Video)',
      description: 'A hopeful nasheed about perseverance and faith.',
      channelId: 'channel-maher-zain',
      channelTitle: 'Maher Zain',
      publishedAt: '2009-10-01T00:00:00Z',
      thumbnails: makeThumbs('KfXIF2Mm2Kc'),
    },
    contentDetails: { duration: 'PT4M54S' },
    statistics: { viewCount: '130000000', likeCount: '2000000' },
    tags: ['islamic', 'nasheed', 'spiritual', 'faith'],
  },
  {
    id: 'Vqfy4ScRXFQ',
    snippet: {
      title: 'Maher Zain - Ya Nabi Salam Alayka (Official Video)',
      description: 'A beloved devotional song honoring the Prophet.',
      channelId: 'channel-maher-zain',
      channelTitle: 'Maher Zain',
      publishedAt: '2011-09-01T00:00:00Z',
      thumbnails: makeThumbs('Vqfy4ScRXFQ'),
    },
    contentDetails: { duration: 'PT5M00S' },
    statistics: { viewCount: '90000000', likeCount: '1500000' },
    tags: ['islamic', 'nasheed', 'spiritual', 'arabic'],
  },
  {
    id: '1XOJFuKHCck',
    snippet: {
      title: 'FA9LA (Rehman Dakait Entry)',
      description: 'Flipperachi delivers a viral Khaleeji hip-hop anthem.',
      channelId: 'channel-flipperachi',
      channelTitle: 'Flipperachi',
      publishedAt: '2024-05-29T00:00:00Z',
      thumbnails: makeThumbs('1XOJFuKHCck'),
    },
    contentDetails: { duration: 'PT2M58S' },
    statistics: { viewCount: '12000000', likeCount: '520000' },
    tags: ['global', 'arabic', 'hiphop', 'viral', 'latest'],
  },
  {
    id: 'iPNLfS8o5g0',
    snippet: {
      title: 'Mast Malaika (Hindi)',
      description: 'High-energy party track from the film Mark.',
      channelId: 'channel-shatadru-kabir',
      channelTitle: 'Shatadru Kabir',
      publishedAt: '2025-12-15T00:00:00Z',
      thumbnails: makeThumbs('iPNLfS8o5g0'),
    },
    contentDetails: { duration: 'PT3M28S' },
    statistics: { viewCount: '2200000', likeCount: '98000' },
    tags: ['india', 'hindi', 'bollywood', 'party', 'latest'],
  },
  {
    id: 'neOasLBWoy0',
    snippet: {
      title: 'Monica',
      description: 'Video song.',
      channelId: 'channel-monica',
      channelTitle: 'Monica',
      publishedAt: '2018-08-10T00:00:00Z',
      thumbnails: makeThumbs('neOasLBWoy0'),
    },
    contentDetails: { duration: 'PT4M12S' },
    statistics: { viewCount: '9400000', likeCount: '98000' },
    tags: ['music', 'video-song', 'india', 'tamil'],
  },
  {
    id: 'eRM2reLxN5k',
    snippet: {
      title: 'Meri Zindagi Hai Tu | OST',
      description: 'Pakistani drama OST.',
      channelId: 'channel-meri-zindagi-ost',
      channelTitle: 'Meri Zindagi Hai Tu OST',
      publishedAt: '2022-06-05T00:00:00Z',
      thumbnails: makeThumbs('eRM2reLxN5k'),
    },
    contentDetails: { duration: 'PT3M50S' },
    statistics: { viewCount: '18200000', likeCount: '135000' },
    tags: ['pakistan', 'drama', 'ost', 'urdu', 'romance', 'music'],
  },
  {
    id: 'TMY1g8pAktk',
    snippet: {
      title:
        'Mayavi ಮಾಯಾವಿ | Sonu Nigam | Sanjith Hegde | Nagarjun Sharma | Bhoomi 2024 | Merchant Records',
      description: 'Kannada video song from Bhoomi (2024).',
      channelId: 'channel-merchant-records',
      channelTitle: 'Merchant Records',
      publishedAt: '2024-12-06T00:00:00Z',
      thumbnails: makeThumbs('TMY1g8pAktk'),
    },
    contentDetails: { duration: 'PT4M42S' },
    statistics: { viewCount: '4200000', likeCount: '82000' },
    tags: ['india', 'kannada', 'music', 'video-song', 'bhoomi', '2024'],
  },
  {
    id: 'h13lbNkUaEg',
    snippet: {
      title:
        'Masth Malaika - Video | Mark | Kichcha Sudeepa, Nishvika | Vijay Kartikeyaa | Ajaneesh B Loknath',
      description: 'Video song from the film Mark.',
      channelId: 'channel-shatadru-kabir',
      channelTitle: 'Shatadru Kabir',
      publishedAt: '2024-08-18T00:00:00Z',
      thumbnails: makeThumbs('h13lbNkUaEg'),
    },
    contentDetails: { duration: 'PT3M32S' },
    statistics: { viewCount: '2800000', likeCount: '64000' },
    tags: ['india', 'kannada', 'music', 'video-song', 'film'],
  },
  {
    id: 'tQHAwV9B8hQ',
    snippet: {
      title: "World's most beautiful recitation of Surah Ar-Rahman (سورة الرحمن)",
      description: 'Recitation from Zikrullah TV.',
      channelId: 'channel-zikrullah-tv',
      channelTitle: 'Zikrullah TV',
      publishedAt: '2020-03-12T00:00:00Z',
      thumbnails: makeThumbs('tQHAwV9B8hQ'),
    },
    contentDetails: { duration: 'PT13M20S' },
    statistics: { viewCount: '15600000', likeCount: '540000' },
    tags: ['islamic', 'quran', 'recitation', 'surah', 'spiritual'],
  },
  {
    id: 'f6HQDFoSc9E',
    snippet: {
      title: 'Sanwal Yaar Piya | OST | Javed Bashir',
      description: 'Original score from the drama Sanwal Yaar Piya.',
      channelId: 'channel-osturdu-topics',
      channelTitle: 'OSTURDU TOPICS',
      publishedAt: '2025-09-14T00:00:00Z',
      thumbnails: makeThumbs('f6HQDFoSc9E'),
    },
    contentDetails: { duration: 'PT5M04S' },
    statistics: { viewCount: '212000', likeCount: '2300' },
    tags: ['pakistan', 'drama', 'ost', 'urdu', 'romance', 'geo'],
  },
  {
    id: 'ICu3ITHnBoM',
    snippet: {
      title: "How the Qur'an Was Revealed and Compiled | Hamza Yusuf",
      description: 'Lecture on the revelation and compilation of the Quran.',
      channelId: 'channel-islam-on-demand',
      channelTitle: 'Islam On Demand',
      publishedAt: '2010-01-01T00:00:00Z',
      thumbnails: makeThumbs('ICu3ITHnBoM'),
    },
    contentDetails: { duration: 'PT1H10M03S' },
    statistics: { viewCount: '72000', likeCount: '1500' },
    tags: ['islamic', 'quran', 'education', 'lecture', 'history'],
  },
  {
    id: 'mT_hyBZXgYc',
    snippet: {
      title: "The Order of the Qur'an | Muiz Bukhary",
      description: 'Explains the order of revelation and arrangement of surahs.',
      channelId: 'channel-digital-mimbar',
      channelTitle: 'Digital Mimbar',
      publishedAt: '2016-11-28T00:00:00Z',
      thumbnails: makeThumbs('mT_hyBZXgYc'),
    },
    contentDetails: { duration: 'PT17M12S' },
    statistics: { viewCount: '16500', likeCount: '600' },
    tags: ['islamic', 'quran', 'education', 'surah', 'revelation'],
  },
];

export const commentsByVideoId = {
  dQw4w9WgXcQ: [
    {
      id: 'rick-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Maya T.',
            textDisplay: 'Still a classic after all these years.',
          },
        },
      },
    },
    {
      id: 'rick-2',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Jordan L.',
            textDisplay: 'This song never leaves my playlist.',
          },
        },
      },
    },
  ],
  kJQP7kiw5Fk: [
    {
      id: 'des-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Isabella R.',
            textDisplay: 'Instant summer vibes.',
          },
        },
      },
    },
  ],
  iG9CE55wbtY: [
    {
      id: 'ted-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Ari S.',
            textDisplay: 'Still one of the most inspiring talks.',
          },
        },
      },
    },
    {
      id: 'ted-2',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Priya M.',
            textDisplay: 'A reminder to keep creativity alive.',
          },
        },
      },
    },
  ],
  wD1O_hz3By4: [
    {
      id: 'spx-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Cole D.',
            textDisplay: 'The dual booster landing still gives me chills.',
          },
        },
      },
    },
  ],
  QkkoHAzjnUs: [
    {
      id: 'gta-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Riley K.',
            textDisplay: 'Iconic trailer. Set the tone perfectly.',
          },
        },
      },
    },
  ],
  '21X5lGlDOfg': [
    {
      id: 'nasa-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Elena V.',
            textDisplay: 'Love leaving this stream on while working.',
          },
        },
      },
    },
  ],
  BddP6PYo2gs: [
    {
      id: 'kes-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Rhea S.',
            textDisplay: 'This chorus still hits every time.',
          },
        },
      },
    },
  ],
  OsU0CGZoV8E: [
    {
      id: 'rrr-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Arjun P.',
            textDisplay: 'Pure energy. The choreography is insane.',
          },
        },
      },
    },
  ],
  BBAyRBTfsOU: [
    {
      id: 'vaa-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Kavya N.',
            textDisplay: 'One of my all-time favorites.',
          },
        },
      },
    },
  ],
  YR12Z8f1Dh8: [
    {
      id: 'kol-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Vishal R.',
            textDisplay: 'Still catchy after a decade.',
          },
        },
      },
    },
  ],
  '5Eqb_-j3FDA': [
    {
      id: 'pas-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Ayesha K.',
            textDisplay: 'The blend of styles is beautiful.',
          },
        },
      },
    },
  ],
  IHNzOHi8sJs: [
    {
      id: 'bp-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Minji L.',
            textDisplay: 'That drop is iconic.',
          },
        },
      },
    },
  ],
  gdZLi9oWNZg: [
    {
      id: 'bts-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Sam K.',
            textDisplay: 'Instant mood lift.',
          },
        },
      },
    },
  ],
  CQLsdm1ZYAw: [
    {
      id: 'calm-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Tomi A.',
            textDisplay: 'This groove is addictive.',
          },
        },
      },
    },
  ],
  XqZsoesa55w: [
    {
      id: 'shark-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Leah J.',
            textDisplay: 'The ultimate kids anthem.',
          },
        },
      },
    },
  ],
  'wV3N-wCRL2k': [
    {
      id: 'bus-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Rahul D.',
            textDisplay: 'Perfect for long drives with kids.',
          },
        },
      },
    },
  ],
  KfXIF2Mm2Kc: [
    {
      id: 'isha-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Amina H.',
            textDisplay: 'Soothing and uplifting.',
          },
        },
      },
    },
  ],
  Vqfy4ScRXFQ: [
    {
      id: 'nabi-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Ibrahim S.',
            textDisplay: 'Beautiful and heartfelt.',
          },
        },
      },
    },
  ],
  '1XOJFuKHCck': [
    {
      id: 'fa9la-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Neel P.',
            textDisplay: 'That beat hits every time.',
          },
        },
      },
    },
  ],
  iPNLfS8o5g0: [
    {
      id: 'mala-1',
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: 'Sana R.',
            textDisplay: 'On loop since it dropped.',
          },
        },
      },
    },
  ],
};
