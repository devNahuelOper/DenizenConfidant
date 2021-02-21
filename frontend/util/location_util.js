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
  'Spain': {
    cities: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
    flag: '🇪🇸',
    currency: 'EUR'
  },
  'UK': {
    cities: ['Belfast', 'Edinburgh', 'Liverpool', 'London', 'Glasgow', 'Manchester'],
    flag: '🇬🇧',
    currency: 'GBP'
  },
  'United Kingdom': {
    cities: ['Belfast', 'Edinburgh', 'Liverpool', 'London', 'Glasgow', 'Manchester'],
    flag: '🇬🇧',
    currency: 'GBP'
  },
  'USA': {
    cities: ['Atlanta', 'Boston', 'Chicago', 'Dallas', 'Denver', 'Detroit',
    'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York', 'Philadelphia',
    'Phoenix', 'Pittsburgh', 'San Francisco', 'Seattle', 'Washington DC'],
    flag: '🇺🇸',
    currency: 'USD'
  },
  'United States': {
    cities: ['Atlanta', 'Boston', 'Chicago', 'Dallas', 'Denver', 'Detroit',
    'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York', 'Philadelphia',
    'Phoenix', 'Pittsburgh', 'San Francisco', 'Seattle', 'Washington DC'],
    flag: '🇺🇸',
    currency: 'USD'
  }
}

export const getCountry = (location) => {
  return location.split(', ')[1] || location;
}

