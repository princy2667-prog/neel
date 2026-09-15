import { ServiceItem, ProcedureItem, FaqItem, CareCategoryItem } from '../types';

export const COMPANY_INFO = {
  name: "RIYA MEDICARE",
  tagline: "Professional Nursing Homecare Services",
  business: "Home Nursing Service & Care Taker @ 24 Hours",
  phone: "7567425627",
  whatsapp: "917567425627",
  email: "riyamedicare@gmail.com",
  cities: ["Surat", "Ahmedabad"],
  state: "Gujarat, India",
  managingDirector: "Neel Rathod",
  accountant: "Rajveer Rathod",
  logoUrl: "/assets/riya-medicare-logo.png",
  symbolUrl: "/assets/riya-medicare-symbol.png",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "home-nursing",
    title: "Home Nursing Service",
    shortDesc: "24/7 skilled nursing care at home by registered male and female nurses.",
    fullDesc: "Our home nursing service brings ICU-experienced nurses to your doorstep for post-surgical care, vital tracking, IV drip therapy, medication management, and daily clinical monitoring.",
    iconName: "HeartPulse",
    badge: "24/7 Available",
    features: [
      "Vital signs tracking & clinical record keeping",
      "Medication & IV infusion management",
      "Male & female qualified nurses",
      "Emergency escalation protocols"
    ]
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    shortDesc: "Compassionate full-time and part-time assistance for senior citizens.",
    fullDesc: "Dedicated geriatric caregivers who assist with daily hygiene, assisted walking, medication reminders, meal support, and gentle emotional companionship for elderly family members.",
    iconName: "UserCheck",
    badge: "Most Requested",
    features: [
      "Personal hygiene & bathing assistance",
      "Assisted mobility & bed transfer",
      "Nutritional diet & feeding assistance",
      "Warm, respectful companionship"
    ]
  },
  {
    id: "icu-care",
    title: "ICU Care At Home",
    shortDesc: "Advanced critical care setup with ventilator & monitoring trained nurses.",
    fullDesc: "Hospital-grade intensive care setup at home. Equipped with ventilator support, tracheostomy care, continuous ECG monitoring, and round-the-clock critical nursing supervision.",
    iconName: "Activity",
    badge: "Critical Support",
    features: [
      "Ventilator & oxygen therapy monitoring",
      "Tracheostomy & suction care",
      "Continuous cardiac & vital tracking",
      "ICU-certified nursing staff"
    ]
  },
  {
    id: "baby-care",
    title: "Baby Care & Mother Care",
    shortDesc: "Newborn care, mother post-delivery guidance, and pediatric support.",
    fullDesc: "Specialized newborn caregivers and pediatric nurses helping mothers with post-natal recovery, baby massage, feeding support, hygiene, and infant sleep routine stabilization.",
    iconName: "Baby",
    badge: "Specialized Care",
    features: [
      "Newborn massage & hygiene care",
      "Lactation & feeding assistance",
      "Post-natal mother recovery support",
      "Infant vital sign monitoring"
    ]
  },
  {
    id: "dementia-care",
    title: "Dementia Care",
    shortDesc: "Gentle memory care for patients managing Alzheimer's & cognitive decline.",
    fullDesc: "Specially trained memory care assistants providing a calm, safe environment, cognitive exercises, behavioral reassurance, and structured daily routines for dementia patients.",
    iconName: "Brain",
    badge: "Specialist Care",
    features: [
      "Safe environment & wandering prevention",
      "Cognitive stimulation exercises",
      "Behavioral reassurance therapy",
      "Structured daily routine management"
    ]
  },
  {
    id: "post-hospital-care",
    title: "Post-Hospital Care",
    shortDesc: "Accelerated recovery at home following hospital discharge & surgery.",
    fullDesc: "Smooth transition from hospital to home care. Reduces hospital readmission rates through surgical wound dressing, catheter management, pain relief, and rehab exercises.",
    iconName: "Stethoscope",
    badge: "Fast Recovery",
    features: [
      "Aseptic surgical dressing care",
      "Pain relief & injection administration",
      "Mobility & rehab support",
      "Physician report updates"
    ]
  },
  {
    id: "disability-care",
    title: "Disability Care",
    shortDesc: "Empowering personal caretaker support for physically challenged individuals.",
    fullDesc: "Tailored assistance for individuals living with spinal injury, stroke paralysis, or mobility impairment to maintain independence, dignity, and personal hygiene.",
    iconName: "Accessibility",
    badge: "Dedicated Aid",
    features: [
      "Safe bed-to-wheelchair transfers",
      "Pressure sore (bed sore) prevention",
      "Personal hygiene & grooming",
      "Adaptive daily living support"
    ]
  },
  {
    id: "cancer-care",
    title: "Specialized Cancer Care",
    shortDesc: "Empathic oncology nursing care, chemo side-effect care & palliative support.",
    fullDesc: "Palliative oncology homecare focused on chemo recovery, PICC line care, pain protocol management, hydration therapy, and compassionate emotional support for patient & family.",
    iconName: "ShieldAlert",
    badge: "Oncology Care",
    features: [
      "Chemotherapy side-effect management",
      "PICC line & chemo port maintenance",
      "Palliative pain protocol management",
      "Family emotional counseling"
    ]
  }
];

export const PROCEDURES_DATA: ProcedureItem[] = [
  {
    id: "dressing",
    title: "All Types of Dressings",
    category: "Wound Care",
    desc: "Aseptic dressing for surgical wounds, diabetic ulcers, bed sores, and burns.",
    time: "30-45 mins",
    iconName: "Bandage"
  },
  {
    id: "catheter",
    title: "Catheter Care / Insertion",
    category: "Urinary Care",
    desc: "Foley catheter insertion, urobag change, irrigation, and removal by certified nurse.",
    time: "20-30 mins",
    iconName: "Syringe"
  },
  {
    id: "ryles-tube",
    title: "Ryles Tube Feeding / Insertion",
    category: "Enteral Care",
    desc: "Nasogastric (NG) / Ryles tube insertion, verification, and tube feeding protocols.",
    time: "30 mins",
    iconName: "FileSpreadsheet"
  },
  {
    id: "nursing-aid-24h",
    title: "24 Hours Nursing Aid Services",
    category: "Continuous Care",
    desc: "Round-the-clock trained nursing assistants for constant bed care and vitals.",
    time: "24 Hours Shift",
    iconName: "Clock"
  },
  {
    id: "doctor-nurse-visit",
    title: "Nursing (F/M) & Doctor Visiting @ Home",
    category: "Home Visit",
    desc: "On-demand female/male nurse visits or doctor consultation at your doorstep.",
    time: "Scheduled Visit",
    iconName: "UserPlus"
  },
  {
    id: "iv-im-injection",
    title: "All Types of IV & IM Injection",
    category: "Medication Admin",
    desc: "Sterile IV drip administration, IM injections, and antibiotic infusions.",
    time: "15-45 mins",
    iconName: "Syringe"
  },
  {
    id: "blood-sample",
    title: "Blood Sample Collection",
    category: "Diagnostics",
    desc: "Hassle-free doorstep blood sample collection with digital lab reports.",
    time: "15 mins",
    iconName: "TestTube"
  },
  {
    id: "palliative-care",
    title: "End of Life Care & Palliative Care",
    category: "Comfort Care",
    desc: "Compassionate end-of-life care focusing on pain relief, dignity, and peace.",
    time: "Continuous",
    iconName: "Sparkles"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy @ Home",
    category: "Rehabilitation",
    desc: "Certified physiotherapist visits for stroke rehab, mobility, and joint pain.",
    time: "45-60 mins",
    iconName: "Dumbbell"
  }
];

export const CARE_CATEGORIES_DATA: CareCategoryItem[] = [
  {
    id: "elderly",
    title: "Elderly Care",
    description: "Daily assistance, mobility support, medication management and respectful companionship for seniors.",
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    badge: "Senior Wellness"
  },
  {
    id: "post-hospital",
    title: "Post-Hospital Care",
    description: "Targeted surgical wound care, injection administration, and recovery monitoring at home.",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    badge: "Smooth Recovery"
  },
  {
    id: "icu-home",
    title: "ICU Care At Home",
    description: "Hospital-standard ICU ventilator, tracheostomy, and cardiac monitoring setup.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    badge: "Critical Support"
  },
  {
    id: "baby-mother",
    title: "Baby & Mother Care",
    description: "Newborn hygiene, infant massage, feeding guidance, and mother post-delivery support.",
    imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
    badge: "Post-Natal Care"
  },
  {
    id: "dementia",
    title: "Dementia & Memory Care",
    description: "Structured safe environment, behavioral reassurance, and routine stabilization for dementia.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    badge: "Memory Support"
  },
  {
    id: "cancer",
    title: "Cancer & Oncology Care",
    description: "Chemotherapy side-effect management, PICC line maintenance, and palliative pain control.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    badge: "Palliative Care"
  },
  {
    id: "disability",
    title: "Disability Support",
    description: "Assisted bed transfer, hygiene maintenance, and paralysis recovery care.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    badge: "Mobility Aid"
  },
  {
    id: "palliative",
    title: "Palliative Comfort",
    description: "Empathetic end-of-life care keeping patients dignified and pain-free at home.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    badge: "Dignified Support"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "What home nursing services do you provide?",
    answer: "We provide comprehensive 24/7 home healthcare including full-time home nursing, 24-hour caretakers, ICU setup at home, elderly care, baby care, post-hospital recovery, cancer care, dementia support, injection administration, surgical dressing, catheter care, and blood sample collection."
  },
  {
    id: "faq-2",
    question: "Are your services available 24 hours?",
    answer: "Yes! Riya Medicare operates 24 hours a day, 7 days a week. We offer 12-hour day shifts, 12-hour night shifts, 24-hour live-in caretakers/nurses, as well as on-demand procedure visits in Surat and Ahmedabad."
  },
  {
    id: "faq-3",
    question: "Do you provide elderly care?",
    answer: "Yes, elderly care is one of our primary services. Our trained caregivers assist senior citizens with personal hygiene, bathing, assisted mobility, feeding, medication schedules, and warm companionship."
  },
  {
    id: "faq-4",
    question: "Do you provide post-hospital care?",
    answer: "Yes. We assist post-surgery and post-discharge patients with wound dressings, IV/IM medication administration, vital monitoring, mobility assistance, and doctor-aligned recovery plans at home."
  },
  {
    id: "faq-5",
    question: "Can I request a female or male nurse specifically?",
    answer: "Yes. We respect patient comfort and privacy. We provide certified Female Nurses (F) and Male Nurses (M) based on your family's request."
  },
  {
    id: "faq-6",
    question: "Do you provide ICU care at home?",
    answer: "Yes. We set up hospital-standard ICU care units at home equipped with trained ICU nurses, ventilator tracking, oxygen management, suctioning, and tracheostomy care."
  },
  {
    id: "faq-7",
    question: "Do you provide physiotherapy services?",
    answer: "Yes. We offer doorstep physiotherapy sessions for stroke rehabilitation, orthopedic post-surgery rehab, joint mobility, and chronic pain management."
  },
  {
    id: "faq-8",
    question: "Which cities do you currently serve?",
    answer: "We currently provide home nursing and caretaker services in Surat and Ahmedabad, Gujarat, India, with rapid emergency deployment capabilities."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Contact Us",
    description: "Call 7567425627 or request care through our website to speak with our homecare coordinators."
  },
  {
    step: "02",
    title: "Understand Your Needs",
    description: "We evaluate the patient's medical condition, shift duration (12h/24h), and staff preferences."
  },
  {
    step: "03",
    title: "Assign The Right Care Professional",
    description: "We match qualified, background-verified male or female nurses/caretakers suited to your requirements."
  },
  {
    step: "04",
    title: "Start Care At Home",
    description: "Our staff arrives at your doorstep to deliver compassionate, professional healthcare."
  }
];
