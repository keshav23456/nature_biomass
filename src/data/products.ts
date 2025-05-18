export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 'steam-boiler-industrial',
    title: 'Industrial Steam Boiler',
    description: 'High-capacity steam boiler designed for industrial applications with advanced biomass combustion technology for maximum efficiency and minimal emissions.',
    image: 'https://images.pexels.com/photos/2465363/pexels-photo-2465363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Steam Boilers'
  },
  {
    id: 'steam-boiler-commercial',
    title: 'Commercial Steam Boiler',
    description: 'Medium-sized steam boiler perfect for commercial buildings, hospitals, and campus environments. Features automated fuel handling and remote monitoring capabilities.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Steam Boilers'
  },
  {
    id: 'thermic-fluid-heater-standard',
    title: 'Standard Thermic Fluid Heater',
    description: 'Versatile thermic fluid heater for process industries requiring consistent high temperature heat transfer without pressure. Low maintenance design with excellent thermal efficiency.',
    image: 'https://images.pexels.com/photos/2846615/pexels-photo-2846615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Thermic Fluid Heaters'
  },
  {
    id: 'thermic-fluid-heater-hightemp',
    title: 'High Temperature Thermic Fluid Heater',
    description: 'Specialized thermic fluid heater capable of producing temperatures up to 350°C for demanding industrial processes. Includes advanced safety features and monitoring systems.',
    image: 'https://images.pexels.com/photos/4491452/pexels-photo-4491452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Thermic Fluid Heaters'
  },
  {
    id: 'biomass-generator-500kw',
    title: '500kW Biomass Generator',
    description: 'Medium-capacity biomass power generator ideal for small industrial operations or community-based power generation. Includes automatic fuel feeding system and remote monitoring.',
    image: 'https://images.pexels.com/photos/4436364/pexels-photo-4436364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Generators'
  },
  {
    id: 'biomass-generator-1mw',
    title: '1MW Biomass Generator',
    description: 'Large-scale biomass power generation system for industrial applications. Features advanced combustion control, emission management, and grid synchronization capabilities.',
    image: 'https://images.pexels.com/photos/1534924/pexels-photo-1534924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Generators'
  },
  {
    id: 'maintenance-service',
    title: 'Maintenance & Service',
    description: 'Comprehensive maintenance programs for all biomass systems. Regular service ensures optimal performance, prevents downtime, and maximizes equipment lifespan.',
    image: 'https://images.pexels.com/photos/7108212/pexels-photo-7108212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Services'
  },
  {
    id: 'consultation-design',
    title: 'Consultation & Design',
    description: 'Expert consultation and custom design services for biomass energy systems. Our engineers work with you to create the optimal solution for your specific needs.',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Services'
  },
  {
    id: 'installation-commissioning',
    title: 'Installation & Commissioning',
    description: 'Professional installation and commissioning services for all biomass energy systems. Our experienced team ensures your system is properly installed and optimized for performance.',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Services'
  }
];