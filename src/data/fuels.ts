export interface Fuel {
  name: string;
  type: string;
  description: string;
  image: string;
  calorificValue: string;
}

export const fuels: Fuel[] = [
  {
    name: 'White Coal Briquettes',
    type: 'Briquettes',
    description: 'Premium biomass briquettes made from agricultural waste, with high density and excellent burning characteristics.',
    image: 'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '4800'
  },
  {
    name: 'Sawdust Briquettes',
    type: 'Briquettes',
    description: 'Eco-friendly briquettes produced from woodworking and furniture manufacturing waste, ideal for industrial and commercial heating.',
    image: 'https://images.pexels.com/photos/6979909/pexels-photo-6979909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '4600'
  },
  {
    name: 'Premium Wood Pellets',
    type: 'Pellets',
    description: 'High-quality wood pellets with consistent size, low moisture content, and high energy density. Suitable for residential and commercial heating.',
    image: 'https://images.pexels.com/photos/6976126/pexels-photo-6976126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '4900'
  },
  {
    name: 'Agro-Waste Pellets',
    type: 'Pellets',
    description: 'Sustainable pellets made from agricultural residues like rice husks, sugarcane bagasse, and corn stalks. Cost-effective alternative to traditional fuels.',
    image: 'https://images.pexels.com/photos/4039286/pexels-photo-4039286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '4300'
  },
  {
    name: 'Hardwood Chips',
    type: 'Wood Chips',
    description: 'Premium hardwood chips with consistent size and low moisture content. Ideal for larger biomass boilers and commercial heating systems.',
    image: 'https://images.pexels.com/photos/7214932/pexels-photo-7214932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '3800'
  },
  {
    name: 'Mixed Forest Residue Chips',
    type: 'Wood Chips',
    description: 'Economical wood chips produced from forest management activities. Suitable for larger industrial biomass systems.',
    image: 'https://images.pexels.com/photos/7214757/pexels-photo-7214757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '3500'
  },
  {
    name: 'Coconut Shell Biomass',
    type: 'CNS',
    description: 'High-density biomass fuel made from coconut shells. Exceptional calorific value and long burning time make it ideal for industrial applications.',
    image: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '5200'
  },
  {
    name: 'CNS Charcoal',
    type: 'CNS',
    description: 'Premium charcoal produced from coconut shells. Virtually smokeless and high-temperature burn characteristics, perfect for specialized industrial processes.',
    image: 'https://images.pexels.com/photos/1038148/pexels-photo-1038148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    calorificValue: '7500'
  }
];