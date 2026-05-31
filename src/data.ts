import { Service, Testimonial, Project, FAQ } from './types';

export const servicesData: Service[] = [
  {
    id: 'new-builds',
    title: 'New Builds',
    description: 'Bespoke residential builds engineered for style, sustainability, and longevity.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600'
  },
  {
    id: 'knockdown-rebuilds',
    title: 'Knockdown Rebuilds',
    description: 'Transform your current address. We handle demolition to brand new state-of-the-art homes.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600'
  },
  {
    id: 'custom-builds',
    title: 'Custom Builds',
    description: 'Tailored architectural solutions built specifically to match your lifestyle and property canvas.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Enforcing seamless timelines, safety compliance, and direct material sourcing expertise.',
    imageUrl: 'https://i.ibb.co/v6nWskvN/4e358d2c-d638-41d0-8715-c49e53151617-Expires-1780144599-Key-Name-labs-flow-prod-cdn-key-Signature-q.jpg'
  },
  {
    id: 'design-approval',
    title: 'Design and Approval',
    description: 'Navigating Sydney/local council approvals, architectural blue-printing, and surveying.',
    imageUrl: 'https://i.ibb.co/SD0hZJxC/image.png'
  },
  {
    id: 'renovations',
    title: 'Renovations',
    description: 'Expert structural adaptations, luxury extension designs, and kitchen/bathroom revitalizations.',
    imageUrl: 'https://i.ibb.co/HpfRLsqP/83d63580-f858-46e3-8906-8e6bbc67b7c7.jpg'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Ambika Constructions exceeded our expectations from start to finish.Their team maintained excellent communication throughout the project and delivered our dream home exactly as promised.The quality of workmanship and attention to detail were outstanding.Highly recommended !',
    author: 'prathamesh kshirsagar',
    role: 'Udgir, Latur',
    avatarUrl: 'https://i.ibb.co/8LBvSJ14/IMG-20260531-185745.jpg'
  },
  {
    id: 't-2',
    quote: 'We chose Ambika Constructions for our custom home build, and it was the best decision we made. The fixed-price contract gave us confidence, and the team kept us updated at every stage. Professional, honest, and committed to excellence.',
    author: 'Ajay Pimpare',
    role: 'Udgir, Latur',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 't-3',
    quote: 'From council approvals to final handover, Ambika Constructions delivered excellence. Premium finishes, honest pricing, and reliable timelines made our renovation experience outstanding.',
    author: 'Vijay Patil',
    role: 'Udgir, Latur',
    avatarUrl: 'https://randomuser.me/api/portraits/men/29.jpg'
  },
  {
    id: 't-4',
    quote: 'Perfect first home building experience! Ambika Constructions kept us informed throughout. Excellent craftsmanship, structural excellence, and absolute honesty. Couldn\'t ask for better builders!',
    author: 'Gajanan Bhopanikar',
    role: 'Devani, Latur',
    avatarUrl: 'https://randomuser.me/api/portraits/men/39.jpg'
  }
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'The Geometric Villa',
    category: 'Custom Residence',
    location: 'Mosman, Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800',
    sizeClass: 'large'
  },
  {
    id: 'proj-2',
    title: 'The Contemporary Facade',
    category: 'Knockdown Rebuild',
    location: 'Vaucluse, Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
    sizeClass: 'medium'
  },
  {
    id: 'proj-3',
    title: 'Luxury Glass Pavilion',
    category: 'New Build',
    location: 'Double Bay, Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600',
    sizeClass: 'small'
  },
  {
    id: 'proj-4',
    title: 'Minimalist Interior Suite',
    category: 'Renovation',
    location: 'North Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600',
    sizeClass: 'small'
  }
];

export const faqsData: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How Long Does A Typical Project Take?',
    answer: 'Depending on the scope, a custom built home can take between 8 to 14 months, while a standard renovation might take 3 to 6 months. We provide a detailed architectural schedule before starting so you know exactly what is happening each week.'
  },
  {
    id: 'faq-2',
    question: 'How Do We Ensure Quality Control on Site?',
    answer: 'We have dedicated site managers for each project who perform daily safety and craft audits. Additionally, we conduct independent architectural reviews at completion of critical phases (pouring of concrete, framing, waterproofing) before transitioning to the next step.'
  },
  {
    id: 'faq-3',
    question: 'How Do We Handle Budget and Cost Estimations?',
    answer: 'We provide a detailed bill of quantities with fixed-price construction contracts, ensuring there are no surprises or hidden fees. Any variations requested by the client are strictly costed and approved in writing prior to execution.'
  },
  {
    id: 'faq-4',
    question: 'What is Covered in a Knockdown Rebuild Package?',
    answer: 'Ambika Constructions handles the full end-to-end scope: site soil testing, demolition of the pre-existing structure, complete site clearance, custom architectural design tailored to your block\'s orientation, council/DA permissions, and the complete construction of your luxury new residence.'
  },
  {
    id: 'faq-5',
    question: 'Do You Offer Construction Warranties?',
    answer: 'Yes, all local builds are covered by our statutory 6-year structural guarantee and a comprehensive 2-year non-structural maintenance period during which we rectify any minor settlement issues or visual wear.'
  }
];
