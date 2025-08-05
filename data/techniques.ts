import { Technique, CategoryType } from '@/types/technique';

export const CATEGORIES: CategoryType[] = [
  'Suwari Waza',
  'Hanmi Handachi Waza',
  'Tachi Waza',
  'Ushiro Waza',
  'Futari Dori',
  'Randori',
  'Tanto Dori'
];

export const GRADES = [
  { value: '', label: 'All' },
  { value: '5k', label: 'Kyu 5' },
  { value: '4k', label: 'Kyu 4' },
  { value: '3k', label: 'Kyu 3' },
  { value: '2k', label: 'Kyu 2' },
  { value: '1k', label: 'Kyu 1' },
  { value: '1d', label: 'Dan 1' },
  { value: '2d', label: 'Dan 2' },
  { value: '3d', label: 'Dan 3' },
  { value: '4d', label: 'Dan 4' }
];

export const TECHNIQUES: Technique[] = [
  {
    id: '1',
    category: 'Suwari Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Kata Dori',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'sw-kata-ikkyo-1',
        youtubeId: 'ppimQdRfu9Y',
        caption: 'Dojo Satori (o+u)',
        instructor: 'Dojo Satori',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '2',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Kata Dori',
    technique: 'Nikyo',
    videos: [
      {
        id: 'sw-kata-nikyo-1',
        youtubeId: 'EfvVDLojkYQ',
        caption: 'Moriteru Ueshiba (o+u)',
        instructor: 'Moriteru Ueshiba',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '3',
    category: 'Suwari Waza',
    grades: ['2d', '3d'],
    attack: 'Kata Dori',
    technique: 'Sankyo',
    videos: [
      {
        id: 'sw-kata-sankyo-1',
        youtubeId: '8vAi8Md_u4s',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '4',
    category: 'Suwari Waza',
    grades: ['2d', '3d'],
    attack: 'Kata Dori',
    technique: 'Kotegaeshi',
    videos: [
      {
        id: 'sw-kata-kotegaeshi-1',
        youtubeId: 'M-rwcq3iI-0',
        caption: 'Michel Erb (n/a) - Kata Dori non trovato',
        instructor: 'Michel Erb',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '5',
    category: 'Suwari Waza',
    grades: ['2d', '3d'],
    attack: 'Ryote Dori',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'sw-ryote-ikkyo-1',
        youtubeId: 'lKx_o9wo6Gk',
        caption: 'Gergely Juhasz (o)',
        instructor: 'Gergely Juhasz',
        variation: 'o'
      },
      {
        id: 'sw-ryote-ikkyo-2',
        youtubeId: '7YB3155HG2E',
        caption: 'Gergely Juhasz (u)',
        instructor: 'Gergely Juhasz',
        variation: 'u'
      }
    ]
  },
  {
    id: '6',
    category: 'Suwari Waza',
    grades: ['2d', '3d'],
    attack: 'Ryote Dori',
    technique: 'Nikyo',
    videos: [
      {
        id: 'sw-ryote-nikyo-1',
        youtubeId: '7UO9_wXLx_s',
        caption: 'Gergely Juhasz (o)',
        instructor: 'Gergely Juhasz',
        variation: 'o'
      },
      {
        id: 'sw-ryote-nikyo-2',
        youtubeId: 'JTB2WgwBhXY',
        caption: 'Gergely Juhasz (o)',
        instructor: 'Gergely Juhasz',
        variation: 'o'
      }
    ]
  },
  {
    id: '7',
    category: 'Suwari Waza',
    grades: ['2d', '3d'],
    attack: 'Ryote Dori',
    technique: 'Sankyo',
    videos: [
      {
        id: 'sw-ryote-sankyo-1',
        youtubeId: 'xW4XKNBsU14',
        caption: 'Christophe Aloisio (o+u)',
        instructor: 'Christophe Aloisio',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '8',
    category: 'Suwari Waza',
    grades: ['3d'],
    attack: 'Ryote Dori',
    technique: 'Yonkyo',
    videos: [
      {
        id: 'sw-ryote-yonkyo-1',
        youtubeId: 'mdSJchRXx8Y',
        caption: 'Dojo Aïkido Ryu Talant (o+u)',
        instructor: 'Dojo Aïkido Ryu Talant',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '9',
    category: 'Suwari Waza',
    grades: ['3d'],
    attack: 'Ryo Kata Dori',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'sw-ryokata-ikkyo-1',
        youtubeId: 'YuA3OqRRvxU',
        caption: 'Dojo AikiSpain (o+u)',
        instructor: 'Dojo AikiSpain',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '10',
    category: 'Suwari Waza',
    grades: ['3d'],
    attack: 'Ryo Kata Dori',
    technique: 'Nikyo',
    videos: [
      {
        id: 'sw-ryokata-nikyo-1',
        youtubeId: 'ScRgjzC6-ho',
        caption: 'Paul Muller (o+u)',
        instructor: 'Paul Muller',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '11',
    category: 'Suwari Waza',
    grades: ['3d'],
    attack: 'Ryo Kata Dori',
    technique: 'Sankyo',
    videos: [
      {
        id: 'sw-ryokata-sankyo-1',
        youtubeId: 'NkTNkrE6Pwc',
        caption: 'Dojo Aikido klub Centar (o+u)',
        instructor: 'Dojo Aikido klub Centar',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '12',
    category: 'Suwari Waza',
    grades: ['3d'],
    attack: 'Ryo Kata Dori',
    technique: 'Yonkyo',
    videos: [
      {
        id: 'sw-ryokata-yonkyo-1',
        youtubeId: 'WCnK0QXzWlo',
        caption: 'Dojo Aikido klub Centar (o+u)',
        instructor: 'Dojo Aikido klub Centar',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '13',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'sw-shomen-ikkyo-2',
        youtubeId: 'sQqUeFzZaNg',
        caption: 'Christian Tissier (o+u)',
        instructor: 'Christian Tissier',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '14',
    category: 'Suwari Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Nikyo',
    videos: [
      {
        id: 'sw-shomen-nikyo-3',
        youtubeId: 'ETVi6khmA_g',
        caption: 'Christian Tissier (o+u)',
        instructor: 'Christian Tissier',
        variation: 'o+u'
      },
      {
        id: 'sw-shomen-nikyo-4',
        youtubeId: 'uMYY8EYC4xE',
        caption: 'Moriteru Ueshiba (o+u)',
        instructor: 'Moriteru Ueshiba',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '15',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Sankyo',
    videos: [
      {
        id: 'sw-shomen-sankyo-1',
        youtubeId: 'cNopeDu0_eo',
        caption: 'Christian Tissier (o)',
        instructor: 'Christian Tissier',
        variation: 'o'
      },
      {
        id: 'sw-shomen-sankyo-2',
        youtubeId: '8VcayghSyPY',
        caption: 'Christian Tissier (u)',
        instructor: 'Christian Tissier',
        variation: 'u'
      }
    ]
  },
  {
    id: '16',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Yonkyo',
    videos: [
      {
        id: 'sw-shomen-yonkyo-1',
        youtubeId: '9hKavjjYZx8',
        caption: 'Moriteru Ueshiba (o+u)',
        instructor: 'Moriteru Ueshiba',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '17',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Kotegaeshi',
    videos: [
      {
        id: 'sw-shomen-kotegaeshi-1',
        youtubeId: 'cqrFTwe70Gw',
        caption: 'Christian Tissier (n/a)',
        instructor: 'Christian Tissier',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '18',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Iriminage',
    videos: [
      {
        id: 'sw-shomen-iriminage-1',
        youtubeId: 'HOoSY2cvQSY',
        caption: 'Christian Tissier (n/a)',
        instructor: 'Christian Tissier',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '19',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'sw-yokomen-ikkyo-1',
        youtubeId: 'qtMIMFFdAa8',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '20',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Nikyo',
    videos: [
      {
        id: 'sw-yokomen-nikyo-1',
        youtubeId: '2QhwgJewf3w',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '21',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Sankyo',
    videos: [
      {
        id: 'sw-yokomen-sankyo-1',
        youtubeId: 'WVI3ZByGh8o',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '22',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Yonkyo',
    videos: [
      {
        id: 'sw-yokomen-yonkyo-1',
        youtubeId: 'lGGI7hJjg_o',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      },
      {
        id: 'sw-yokomen-yonkyo-2',
        youtubeId: 'hXrok6lxkM8',
        caption: 'Michel Erb (o)',
        instructor: 'Michel Erb',
        variation: 'o'
      }
    ]
  },
  {
    id: '23',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Kotegaeshi',
    videos: [
      {
        id: 'sw-yokomen-kotegaeshi-1',
        youtubeId: 'dcLYSj8E1q0',
        caption: 'François Pichereau (n/a)',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '24',
    category: 'Suwari Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Iriminage',
    videos: [
      {
        id: 'sw-yokomen-iriminage-1',
        youtubeId: 'lyyMewZhorg',
        caption: 'François Pichereau (n/a)',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '25',
    category: 'Hanmi Handachi Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'hhw-katate-ikkyo-1',
        youtubeId: 'fIDhArw7IbA',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '26',
    category: 'Hanmi Handachi Waza',
    grades: ['2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Nikyo',
    videos: [
      {
        id: 'hhw-katate-nikyo-1',
        youtubeId: 'YnQHWC5DbUw',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '27',
    category: 'Hanmi Handachi Waza',
    grades: ['2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Sankyo',
    videos: [
      {
        id: 'hhw-katate-sankyo-1',
        youtubeId: 'cpA4hb27XTk',
        caption: 'Wojciech Głogowski (o+u)',
        instructor: 'Wojciech Głogowski',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '28',
    category: 'Hanmi Handachi Waza',
    grades: ['2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Yonkyo',
    videos: [
      {
        id: 'hhw-katate-yonkyo-1',
        youtubeId: '9FqdR44j0R4',
        caption: 'Dojo Aïkido Ryu Talant (o+u)',
        instructor: 'Dojo Aïkido Ryu Talant',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '29',
    category: 'Hanmi Handachi Waza',
    grades: ['2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Kotegaeshi',
    videos: [
      {
        id: 'hhw-katate-kotegaeshi-1',
        youtubeId: 'gCO1popi3kU',
        caption: 'François Pichereau (n/a)',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '30',
    category: 'Hanmi Handachi Waza',
    grades: ['2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Iriminage',
    videos: [
      {
        id: 'hhw-katate-iriminage-1',
        youtubeId: '503gVAdBP_A',
        caption: 'François Pichereau (n/a)',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '31',
    category: 'Hanmi Handachi Waza',
    grades: ['3k', '2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Shihonage',
    videos: [
      {
        id: 'hhw-katate-shihonage-1',
        youtubeId: 'aPrGOf0qDac',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '32',
    category: 'Hanmi Handachi Waza',
    grades: ['3k', '2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Kaiten Nage',
    videos: [
      {
        id: 'hhw-katate-kaiten-1',
        youtubeId: 'TplxaztrJSw',
        caption: 'Lars Stjernstedt (uci)',
        instructor: 'Lars Stjernstedt',
        variation: 'uci'
      },
      {
        id: 'hhw-katate-kaiten-2',
        youtubeId: '1sXRkvFDwm8',
        caption: 'Lars Stjernstedt (soto)',
        instructor: 'Lars Stjernstedt',
        variation: 'soto'
      }
    ]
  },
  {
    id: '33',
    category: 'Hanmi Handachi Waza',
    grades: ['2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Sumi Otoshi',
    videos: [
      {
        id: 'hhw-katate-sumi-1',
        youtubeId: 'Cq1Y1wC433Y',
        caption: 'Dojo Aïkido Ryu Talant (n/a)',
        instructor: 'Dojo Aïkido Ryu Talant',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '34',
    category: 'Hanmi Handachi Waza',
    grades: ['2d', '3d'],
    attack: 'Katate Dori',
    technique: 'Kokyu Nage',
    videos: [
      {
        id: 'hhw-katate-kokyu-1',
        youtubeId: 'rpex8NlCwmk',
        caption: 'François Pichereau (1st, 2nd, 3rd form)',
        instructor: 'François Pichereau',
        variation: '1st, 2nd, 3rd form'
      }
    ]
  },
  {
    id: '35',
    category: 'Hanmi Handachi Waza',
    grades: ['1k', '1d', '2d', '3d'],
    attack: 'Ryote Dori',
    technique: 'Shihonage',
    videos: [
      {
        id: 'hhw-ryote-shihonage-1',
        youtubeId: 'JdAFs8xrRHU',
        caption: 'François Pichereau (o+u)',
        instructor: 'François Pichereau',
        variation: 'o+u'
      }
    ]
  },
  {
    id: '36',
    category: 'Hanmi Handachi Waza',
    grades: ['3d'],
    attack: 'Ushiro Kata Dori',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'hhw-ushirokata-ikkyo-1',
        youtubeId: 'BtYUkj287d4',
        caption: 'Dojo Aïkido Ryu Talant (o)',
        instructor: 'Dojo Aïkido Ryu Talant',
        variation: 'o'
      }
    ]
  },
  {
    id: '37',
    category: 'Hanmi Handachi Waza',
    grades: ['3d'],
    attack: 'Ushiro Kata Dori',
    technique: 'Sankyo',
    videos: [
      {
        id: 'hhw-ushirokata-sankyo-1',
        youtubeId: 'HdsX2oizp14',
        caption: 'François Pichereau (n/a) found only Ryo',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '38',
    category: 'Hanmi Handachi Waza',
    grades: ['3d'],
    attack: 'Ushiro Kata Dori',
    technique: 'Kokyu Nage',
    videos: [
      {
        id: 'hhw-ushirokata-kokyu-1',
        youtubeId: 'pLs0ndYRDvY',
        caption: 'François Pichereau (n/a) Ryo!',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '39',
    category: 'Hanmi Handachi Waza',
    grades: ['1k'],
    attack: 'Shomen Uchi',
    technique: 'Kotegaeshi',
    videos: [
      {
        id: 'hhw-shomen-kotegaeshi-1',
        youtubeId: 'hTZbsGDiVJ4',
        caption: 'François Pichereau (n/a)',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '40',
    category: 'Hanmi Handachi Waza',
    grades: ['1k'],
    attack: 'Shomen Uchi',
    technique: 'Iriminage',
    videos: [
      {
        id: 'hhw-shomen-iriminage-1',
        youtubeId: '_tfD4mmaqJ8',
        caption: 'François Pichereau (n/a)',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '41',
    category: 'Tachi Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Ai Hanmi Katate Dori',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'tw-aihanmi-ikkyo-1',
        youtubeId: 'xHfu4kWAceM',
        caption: 'Christian Tissier (o)',
        instructor: 'Christian Tissier',
        variation: 'o'
      },
      {
        id: 'tw-aihanmi-ikkyo-2',
        youtubeId: '3-117og5KN0',
        caption: 'Christian Tissier (u)',
        instructor: 'Christian Tissier',
        variation: 'u'
      }
    ]
  },
  {
    id: '42',
    category: 'Tachi Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'tw-shomen-ikkyo-1',
        youtubeId: '3YLH5QuW4Xw',
        caption: 'Christian Tissier (o)',
        instructor: 'Christian Tissier',
        variation: 'o'
      },
      {
        id: 'tw-shomen-ikkyo-2',
        youtubeId: 'y1EwBB21zPA',
        caption: 'Christian Tissier (u)',
        instructor: 'Christian Tissier',
        variation: 'u'
      }
    ]
  },
  {
    id: '43',
    category: 'Tachi Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Shomen Uchi',
    technique: 'Nikyo',
    videos: [
      {
        id: 'tw-shomen-nikyo-1',
        youtubeId: 'JHULMQtky3w',
        caption: 'Christian Tissier (o)',
        instructor: 'Christian Tissier',
        variation: 'o'
      },
      {
        id: 'tw-shomen-nikyo-2',
        youtubeId: 'E9R7MmsAenU',
        caption: 'Christian Tissier (u)',
        instructor: 'Christian Tissier',
        variation: 'u'
      }
    ]
  },
  {
    id: '44',
    category: 'Tachi Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'tw-yokomen-ikkyo-1',
        youtubeId: 'VoP8GloXlwA',
        caption: 'Christian Tissier (o)',
        instructor: 'Christian Tissier',
        variation: 'o'
      },
      {
        id: 'tw-yokomen-ikkyo-2',
        youtubeId: 'WgLAr54c9Ko',
        caption: 'Christian Tissier (u)',
        instructor: 'Christian Tissier',
        variation: 'u'
      }
    ]
  },
  {
    id: '45',
    category: 'Tachi Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Yokomen Uchi',
    technique: 'Kotegaeshi',
    videos: [
      {
        id: 'tw-yokomen-kotegaeshi-1',
        youtubeId: 'LTGRZgRZjvc',
        caption: 'Christian Tissier (int)',
        instructor: 'Christian Tissier',
        variation: 'int'
      },
      {
        id: 'tw-yokomen-kotegaeshi-2',
        youtubeId: 'Zkgb9lem_mU',
        caption: 'Christian Tissier (ext)',
        instructor: 'Christian Tissier',
        variation: 'ext'
      }
    ]
  },
  {
    id: '46',
    category: 'Ushiro Waza',
    grades: ['1d', '2d', '3d'],
    attack: 'Ushiro Ryote Dori',
    technique: 'Ikkyo',
    videos: [
      {
        id: 'uw-ushiroryote-ikkyo-1',
        youtubeId: 'PWEZfhmkt4I',
        caption: 'Christian Tissier (o)',
        instructor: 'Christian Tissier',
        variation: 'o'
      },
      {
        id: 'uw-ushiroryote-ikkyo-2',
        youtubeId: 'n07sJtm8RPg',
        caption: 'Christian Tissier (u)',
        instructor: 'Christian Tissier',
        variation: 'u'
      }
    ]
  },
  {
    id: '47',
    category: 'Ushiro Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Ushiro Ryote Dori',
    technique: 'Nikyo',
    videos: [
      {
        id: 'uw-ushiroryote-nikyo-1',
        youtubeId: '0qcSRQYx-dc',
        caption: 'Christian Tissier (u)',
        instructor: 'Christian Tissier',
        variation: 'u'
      }
    ]
  },
  {
    id: '48',
    category: 'Ushiro Waza',
    grades: ['3k', '1d', '2d', '3d'],
    attack: 'Ushiro Ryote Dori',
    technique: 'Kotegaeshi',
    videos: [
      {
        id: 'uw-ushiroryote-kotegaeshi-1',
        youtubeId: '2zRk5LOzkdE',
        caption: 'Christian Tissier (n/a)',
        instructor: 'Christian Tissier',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '49',
    category: 'Tanto Dori',
    grades: ['2d', '3d'],
    attack: 'Shomen Uchi Honte',
    technique: 'Gokyo',
    videos: [
      {
        id: 'td-shomen-gokyo-1',
        youtubeId: 'jaBjyrGxzR4',
        caption: 'François Pichereau (n/a) Gyakute! Honte not found',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '50',
    category: 'Tanto Dori',
    grades: ['2d', '3d'],
    attack: 'Shomen Uchi Honte',
    technique: 'Sankyo',
    videos: [
      {
        id: 'td-shomen-sankyo-1',
        youtubeId: 'Lv6xr0n7wVU',
        caption: 'François Pichereau (n/a) Gyakute! Honte not found',
        instructor: 'François Pichereau',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '51',
    category: 'Futari Dori',
    grades: ['4d'],
    attack: '',
    technique: '3 tecniche',
    videos: [
      {
        id: 'fd-3tecniche-1',
        youtubeId: 'Ug6IqIZrax8',
        caption: 'Koichi Tohei (n/a)',
        instructor: 'Koichi Tohei',
        variation: 'n/a'
      }
    ]
  },
  {
    id: '52',
    category: 'Randori',
    grades: ['1d', '2d', '3d'],
    attack: 'Mae Ryo Kata Dori',
    technique: 'Jiyu Waza',
    videos: [
      {
        id: 'r-maeryokata-jiyu-1',
        youtubeId: 'xxx',
        caption: 'xxx (n/a)',
        instructor: 'xxx',
        variation: 'n/a'
      }
    ]
  }
];