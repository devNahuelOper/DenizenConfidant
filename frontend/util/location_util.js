export const addCities = {
  'Argentina': ['Buenos Aires', 'Cordoba', 'Mar del Plata', 'Mendoza'],
  'Brazil': ['Porto Alegro', 'Rio de Janeiro', 'Salvador', 'Sao Paulo'],
  'Canada': ['Montreal', 'Toronto', 'Vancouver'],
  'China': ['Beijing', 'Hong Kong', 'Shanghai'],
  'France': ['Marseille', 'Lyon', 'Nice', 'Paris'],
  'Germany': ['Berlin', 'Frankfurt', 'Hamburg', 'Leipzig', 'Munich'],
  'Italy': ['Florence','Milan', 'Naples', 'Rome', 'Venice'],
  'Japan': ['Kyoto', 'Osaka', 'Tokyo'],
  'Netherlands': ['Amsterdam', 'Rotterdam'],
  'Spain': ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
  'United Kingdom': ['Belfast', 'Edinburgh', 'Liverpool', 'London', 'Glasgow', 'Manchester'],
  'United States': ['Atlanta', 'Boston', 'Chicago', 'Dallas', 'Denver', 'Detroit', 
  'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York', 'Philadelphia', 
  'Phoenix', 'Pittsburgh', 'San Francisco', 'Seattle', 'Washington DC']
}

export const expandCountry = {
  'Argentina': {
    cities: ['Buenos Aires', 'Cordoba', 'Mar del Plata', 'Mendoza'],
    flag: '🇦🇷',
    currency: 'ARS'
  },
  'Australia': {
    cities: ['Melbourne', 'Sydney'],
    flag: '🇦🇺',
    currency: 'AUD'
  },
  'Belarus': {
    cities: ['Minsk'],
    flag: '🇧🇾',
    currency: 'RBL'
  },
  'Belgium': {
    cities: ['Antwerp', 'Bruges', 'Brussels'],
    flag: '🇧🇪',
    currency: 'EUR'
  },
  'Brazil': {
    cities: ['Porto Alegro', 'Rio de Janeiro', 'Salvador', 'Sao Paulo'],
    flag: '🇧🇷',
    currency: 'BRL'
  },
  'Canada': {
    cities: ['Montreal', 'Toronto', 'Vancouver'],
    flag: '🇨🇦',
    currency: 'CAD'
  },
  'China': {
    cities: ['Beijing', 'Hong Kong', 'Shanghai'],
    flag: '🇨🇳',
    currency: 'CNY'
  },
  'France': {
    cities: ['Marseille', 'Lyon', 'Nice', 'Paris'],
    flag: '🇫🇷',
    currency: 'EUR'
  },
  'Germany': {
    cities: ['Berlin', 'Frankfurt', 'Hamburg', 'Leipzig', 'Munich'],
    flag: '🇩🇪',
    currency: 'EUR'
  },
  'Ireland': {
    cities: ['Dublin'],
    flag: '🇮🇪',
    currency: 'EUR'
  },
  'Israel': {
    cities: ['Jerusalem', 'Tel Aviv'],
    flag: '🇮🇱',
    currency: 'ILS'
  },
  'Italy': {
    cities: ['Florence', 'Milan', 'Naples', 'Rome', 'Venice'],
    flag: '🇮🇹',
    currency: 'EUR'
  },
  'Japan': {
    cities: ['Kyoto', 'Osaka', 'Tokyo'],
    flag: '🇯🇵',
    currency: 'JPY'
  },
  'Netherlands': {
    cities: ['Amsterdam', 'Rotterdam'],
    flag: '🇳🇱',
    currency: 'EUR'
  },
  'Norway': {
    cities: ['Bergen', 'Oslo'],
    flag: '🇳🇴',
    currency: 'NOK'
  },
  'Russia': {
    cities: ['Moscow', 'St. Petersburg'],
    flag: '🇷🇺',
    currency: 'RUB'
  },
  'Scotland': {
    cities: ['Edinburgh', 'Glasgow'],
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    currency: 'GBP'
  },
  'South Africa': {
    cities: ['Cape Town', 'Johannesburg'],
    flag: '🇿🇦',
    currency: 'ZAR'
  },
  'South Korea': {
    cities: ['Busan', 'Seoul'],
    flag: '🇰🇷',
    currency: 'KRW'
  },
  'Spain': {
    cities: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
    flag: '🇪🇸',
    currency: 'EUR'
  },
  'Sweden': {
    cities: ['Gothenburg', 'Stockholm'],
    flag: '🇸🇪',
    currency: 'SEK'
  },
  'UK': {
    cities: ['Belfast', 'Edinburgh', 'Liverpool', 'London', 'Glasgow', 'Manchester'],
    flag: '🇬🇧',
    currency: 'GBP'
  },
  'Ukraine': {
    cities: ['Kyiv'],
    flag: '🇺🇦',
    currency: 'UAH'
  },
  'USA': {
    cities: ['Atlanta', 'Boston', 'Chicago', 'Dallas', 'Denver', 'Detroit',
    'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York', 'Philadelphia',
    'Phoenix', 'Pittsburgh', 'San Francisco', 'Seattle', 'Washington DC'],
    flag: '🇺🇸',
    currency: 'USD'
  },
}

export const getCountry = (location) => {
  return location.split(', ')[1] || location;
}

