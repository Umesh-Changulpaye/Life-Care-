import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Arjun Mehta',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Arjun focuses on preventive healthcare, early diagnosis, and patient-centric medical treatment with a strong commitment to community health.',
        fees: 500,
        address: {
            line1: '12th Main Road, Indiranagar',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Priya specializes in women’s health and provides compassionate care with emphasis on preventive gynecology and maternity health.',
        fees: 700,
        address: {
            line1: 'Sector 18 Market',
            line2: 'Noida, Uttar Pradesh'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sneha Iyer',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '3 Years',
        about: 'Dr. Sneha has expertise in skin care, cosmetic dermatology, and treatment of chronic skin conditions.',
        fees: 600,
        address: {
            line1: 'Nungambakkam High Road',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Rohan Kulkarni',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '4 Years',
        about: 'Dr. Rohan specializes in child healthcare, vaccinations, nutritional care, and adolescent medicine.',
        fees: 550,
        address: {
            line1: 'FC Road, Deccan Gymkhana',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kavita Menon',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '6 Years',
        about: 'Dr. Kavita focuses on neurological disorders, cognitive health, and long-term neuro care.',
        fees: 900,
        address: {
            line1: 'Marine Drive Road',
            line2: 'Kochi, Kerala'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Aditya Rao',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '5 Years',
        about: 'Dr. Aditya provides advanced neurological treatment with a patient-friendly approach and preventive neuro care.',
        fees: 850,
        address: {
            line1: 'RK Beach Road',
            line2: 'Visakhapatnam, Andhra Pradesh'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Manish Gupta',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Manish is known for his detailed diagnosis, preventive medicine, and long-term patient care.',
        fees: 500,
        address: {
            line1: 'Mira Road East',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Nisha Verma',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS (OBG)',
        experience: '6 Years',
        about: 'Dr. Nisha specializes in reproductive health, pregnancy care, and women’s wellness.',
        fees: 750,
        address: {
            line1: 'Banjara Hills Road No. 3',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Tanvi Singh',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '2 Years',
        about: 'Dr. Tanvi provides expert treatment in clinical dermatology, acne care, and cosmetic procedures.',
        fees: 600,
        address: {
            line1: 'Elgin Road',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Karthik Reddy',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD',
        experience: '3 Years',
        about: 'Dr. Karthik is passionate about child development, nutrition, and preventive pediatric care.',
        fees: 550,
        address: {
            line1: 'KPHB Colony',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Aisha Khan',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '5 Years',
        about: 'Dr. Aisha specializes in neuro-rehabilitation, epilepsy, and cognitive disorders.',
        fees: 950,
        address: {
            line1: 'Hazratganj Road',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Rajat Bansal',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '7 Years',
        about: 'Dr. Rajat provides advanced digestive care, liver disease management, and endoscopic procedures.',
        fees: 900,
        address: {
            line1: 'Model Town Extension',
            line2: 'Ludhiana, Punjab'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Anjali Deshpande',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Anjali focuses on chronic illness management, preventive health check-ups, and holistic treatment.',
        fees: 500,
        address: {
            line1: 'Shivaji Nagar',
            line2: 'Nagpur, Maharashtra'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Radhika Jain',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '4 Years',
        about: 'Dr. Radhika specializes in PCOD, maternity care, and women’s reproductive health.',
        fees: 700,
        address: {
            line1: 'CG Road',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Meera Raj',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDVL',
        experience: '2 Years',
        about: 'Dr. Meera treats skin allergies, pigmentation, and provides modern cosmetic dermatology services.',
        fees: 600,
        address: {
            line1: 'Saibaba Colony',
            line2: 'Coimbatore, Tamil Nadu'
        }
    },
];
