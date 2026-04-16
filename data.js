// Real University Database for Study Abroad Countries
const universityDatabase = {
    "Australia": [
        {
            id: "au-001",
            name: "University of Melbourne",
            country: "Australia",
            city: "Melbourne",
            founded: 1853,
            ranking: "37th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.unimelb.edu.au",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/University_of_Melbourne_Logo.svg",
            image: "https://images.unsplash.com/photo-1560109377-543149ecad16?w=800",
            description: "Established in 1853, the University of Melbourne is Australia's second oldest university and is consistently ranked among the top universities globally.",
            programs: ["Engineering", "Medicine", "Law", "Business", "Computer Science", "Architecture"],
            tuitionFee: "$28,000 - $45,000 AUD/year",
            accommodation: "$15,000 - $25,000 AUD/year",
            studentLife: "Over 45,000 students, vibrant campus life, numerous clubs and societies",
            admission: "IELTS 6.5+ or equivalent, Bachelor's degree for Masters",
            features: [
                "World-class research facilities",
                "Strong industry partnerships",
                "Global student community",
                "Excellent graduate employment rate"
            ]
        },
        {
            id: "au-002",
            name: "University of Sydney",
            country: "Australia",
            city: "Sydney",
            founded: 1850,
            ranking: "60th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.sydney.edu.au",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/35/University_of_Sydney_Logo.svg",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "One of Australia's most prestigious universities, located in the vibrant city of Sydney with world-class facilities.",
            programs: ["Engineering", "Medicine", "Commerce", "Law", "Arts", "Science"],
            tuitionFee: "$30,000 - $50,000 AUD/year",
            accommodation: "$14,000 - $24,000 AUD/year",
            studentLife: "40,000+ students, iconic campus at Camperdown, coastal beauty",
            admission: "IELTS 6.5+ or equivalent, Bachelor's degree for postgraduate",
            features: [
                "Beautiful Sydney Harbour location",
                "Strong alumni network",
                "Research-focused programs",
                "Excellent career support"
            ]
        },
        {
            id: "au-003",
            name: "RMIT University",
            country: "Australia",
            city: "Melbourne",
            founded: 1887,
            ranking: "230th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.rmit.edu.au",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/RMIT_University_Logo.svg/1200px-RMIT_University_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1541339907198-e320a881b5b1?w=800",
            description: "Known for innovation and technology, RMIT offers practical and industry-relevant education.",
            programs: ["Engineering", "IT", "Design", "Business", "Architecture", "Media"],
            tuitionFee: "$25,000 - $40,000 AUD/year",
            accommodation: "$12,000 - $22,000 AUD/year",
            studentLife: "120,000+ students globally, vibrant multicultural community",
            admission: "IELTS 6.0+ or equivalent, relevant academic background",
            features: [
                "Industry partnerships with top companies",
                "Innovation hub",
                "Practical learning approach",
                "High employment rate"
            ]
        },
        {
            id: "au-004",
            name: "Australian National University (ANU)",
            country: "Australia",
            city: "Canberra",
            founded: 1946,
            ranking: "34th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.anu.edu.au",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/ANU_logo.svg/1200px-ANU_logo.svg.png",
            image: "https://images.unsplash.com/photo-1516534775068-bb6c7a7a7f1b?w=800",
            description: "Australia's premier research university, known for rigorous academics and groundbreaking research.",
            programs: ["Science", "Engineering", "Medicine", "Law", "Business", "Arts"],
            tuitionFee: "$30,000 - $48,000 AUD/year",
            accommodation: "$16,000 - $26,000 AUD/year",
            studentLife: "14,000+ students, beautiful campus in capital city",
            admission: "IELTS 6.5+ or equivalent, strong academic record",
            features: [
                "Nobel Prize winners on faculty",
                "Cutting-edge research",
                "Excellent scholarship opportunities",
                "Strong international reputation"
            ]
        },
        {
            id: "au-005",
            name: "University of New South Wales (UNSW)",
            country: "Australia",
            city: "Sydney",
            founded: 1949,
            ranking: "84th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.unsw.edu.au",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/UNSW_Sydney_Logo.svg/1200px-UNSW_Sydney_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800",
            description: "Known for innovation in engineering and technology, UNSW Sydney is a leading research institution.",
            programs: ["Engineering", "Commerce", "Law", "Science", "Medicine", "Computing"],
            tuitionFee: "$28,000 - $46,000 AUD/year",
            accommodation: "$13,000 - $23,000 AUD/year",
            studentLife: "55,000+ students, modern facilities, diverse campus",
            admission: "IELTS 6.5+ or equivalent, competitive entry requirements",
            features: [
                "World-leading engineering programs",
                "Entrepreneurship focus",
                "Industry connections",
                "Modern campus facilities"
            ]
        }
    ],
    "USA": [
        {
            id: "us-001",
            name: "Harvard University",
            country: "USA",
            city: "Cambridge, Massachusetts",
            founded: 1636,
            ranking: "4th (QS World Rankings 2024)",
            type: "Private Ivy League University",
            website: "https://www.harvard.edu",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Harvard_University_logo.svg",
            image: "https://images.unsplash.com/photo-1567427181408-aeb21dcf43d3?w=800",
            description: "One of the world's most prestigious universities with exceptional programs across all disciplines.",
            programs: ["Business", "Law", "Medicine", "Engineering", "Arts & Sciences", "Public Health"],
            tuitionFee: "$60,000 - $75,000 USD/year",
            accommodation: "$15,000 - $20,000 USD/year",
            studentLife: "23,000+ students, historic campus near Boston",
            admission: "SAT 1470-1570, GPA 3.9+, competitive admissions",
            features: [
                "Highest-ranked university in the world",
                "Exceptional financial aid",
                "World-renowned faculty",
                "Extensive research opportunities"
            ]
        },
        {
            id: "us-002",
            name: "Stanford University",
            country: "USA",
            city: "Stanford, California",
            founded: 1885,
            ranking: "5th (QS World Rankings 2024)",
            type: "Private Research University",
            website: "https://www.stanford.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
            image: "https://images.unsplash.com/photo-1598940244886-b37aadbc3e43?w=800",
            description: "Leading university in Silicon Valley known for innovation, technology, and entrepreneurship.",
            programs: ["Engineering", "Computer Science", "Business", "Law", "Medicine", "Science"],
            tuitionFee: "$63,000 - $77,000 USD/year",
            accommodation: "$18,000 - $25,000 USD/year",
            studentLife: "17,500+ students, beautiful campus near San Francisco Bay",
            admission: "SAT 1480-1570, GPA 3.9+, strong application",
            features: [
                "Heart of tech industry",
                "Strong entrepreneurship culture",
                "Excellent placement rates",
                "World-class research facilities"
            ]
        },
        {
            id: "us-003",
            name: "MIT (Massachusetts Institute of Technology)",
            country: "USA",
            city: "Cambridge, Massachusetts",
            founded: 1861,
            ranking: "6th (QS World Rankings 2024)",
            type: "Private Research University",
            website: "https://www.mit.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "World-leading institution in science, engineering, and technology education.",
            programs: ["Engineering", "Science", "Business", "Architecture", "Humanities", "Sloan School"],
            tuitionFee: "$62,000 - $76,000 USD/year",
            accommodation: "$15,000 - $20,000 USD/year",
            studentLife: "1,000+ students, iconic Charles River campus",
            admission: "SAT 1510-1570, GPA 3.9+, extremely competitive",
            features: [
                "Top engineering school",
                "Exceptional research funding",
                "Strong industry partnerships",
                "Innovation-focused curriculum"
            ]
        },
        {
            id: "us-004",
            name: "Yale University",
            country: "USA",
            city: "New Haven, Connecticut",
            founded: 1701,
            ranking: "11th (QS World Rankings 2024)",
            type: "Private Ivy League University",
            website: "https://www.yale.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Yale_University_Logo.png/1200px-Yale_University_Logo.png",
            image: "https://images.unsplash.com/photo-1598940244886-b37aadbc3e43?w=800",
            description: "Historic Ivy League university known for liberal arts education and prestigious programs.",
            programs: ["Law", "Medicine", "Business", "Arts & Sciences", "Drama", "Music"],
            tuitionFee: "$61,000 - $74,000 USD/year",
            accommodation: "$16,000 - $22,000 USD/year",
            studentLife: "13,000+ students, historic residential college system",
            admission: "SAT 1460-1560, GPA 3.9+, competitive application",
            features: [
                "Ivy League prestige",
                "Residential college system",
                "Strong humanities programs",
                "Excellent financial aid"
            ]
        },
        {
            id: "us-005",
            name: "Carnegie Mellon University",
            country: "USA",
            city: "Pittsburgh, Pennsylvania",
            founded: 1900,
            ranking: "25th (QS World Rankings 2024)",
            type: "Private Research University",
            website: "https://www.cmu.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png",
            image: "https://images.unsplash.com/photo-1541339907198-e320a881b5b1?w=800",
            description: "World-renowned for computer science, engineering, drama, and business programs.",
            programs: ["Computer Science", "Engineering", "Business", "Drama", "Humanities", "Science"],
            tuitionFee: "$60,000 - $74,000 USD/year",
            accommodation: "$15,000 - $22,000 USD/year",
            studentLife: "15,000+ students, vibrant Pittsburgh community",
            admission: "SAT 1470-1560, GPA 3.8+, strong in focus area",
            features: [
                "Top computer science school",
                "Strong technical programs",
                "Excellent career outcomes",
                "Innovative curriculum"
            ]
        }
    ],
    "Canada": [
        {
            id: "ca-001",
            name: "University of Toronto",
            country: "Canada",
            city: "Toronto, Ontario",
            founded: 1827,
            ranking: "21st (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.utoronto.ca",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/University_of_Toronto_logo.svg/1200px-University_of_Toronto_logo.svg.png",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "Canada's leading research university with world-class programs across multiple disciplines.",
            programs: ["Engineering", "Medicine", "Law", "Business", "Computer Science", "Arts"],
            tuitionFee: "CAD 30,000 - 50,000/year (International)",
            accommodation: "CAD 12,000 - 20,000/year",
            studentLife: "95,000+ students, diverse Toronto community",
            admission: "IELTS 6.5+, bachelor's degree, strong GPA",
            features: [
                "Canada's top university",
                "Strong research programs",
                "Vibrant multicultural campus",
                "Excellent alumni network"
            ]
        },
        {
            id: "ca-002",
            name: "McGill University",
            country: "Canada",
            city: "Montreal, Quebec",
            founded: 1821,
            ranking: "28th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.mcgill.ca",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/McGill_crest.svg/1200px-McGill_crest.svg.png",
            image: "https://images.unsplash.com/photo-1598940244886-b37aadbc3e43?w=800",
            description: "Elite research institution with strong programs in science, engineering, and business.",
            programs: ["Medicine", "Engineering", "Commerce", "Law", "Science", "Arts"],
            tuitionFee: "CAD 28,000 - 48,000/year (International)",
            accommodation: "CAD 11,000 - 19,000/year",
            studentLife: "40,000+ students, historic downtown Montreal campus",
            admission: "IELTS 6.5+, bachelor's degree, competitive entry",
            features: [
                "World-class research",
                "Beautiful Montreal location",
                "Strong engineering programs",
                "International student support"
            ]
        },
        {
            id: "ca-003",
            name: "University of British Columbia (UBC)",
            country: "Canada",
            city: "Vancouver, British Columbia",
            founded: 1908,
            ranking: "30th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.ubc.ca",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/University_of_British_Columbia_crest.svg/1200px-University_of_British_Columbia_crest.svg.png",
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800",
            description: "Canada's leading research university offering exceptional programs with scenic Vancouver backdrop.",
            programs: ["Engineering", "Science", "Medicine", "Business", "Law", "Applied Science"],
            tuitionFee: "CAD 32,000 - 52,000/year (International)",
            accommodation: "CAD 13,000 - 21,000/year",
            studentLife: "67,000+ students, beautiful campus near Pacific Ocean",
            admission: "IELTS 6.5+, bachelor's degree, strong academic record",
            features: [
                "Scenic coastal location",
                "Strong research facilities",
                "International reputation",
                "Excellent student support"
            ]
        },
        {
            id: "ca-004",
            name: "University of Alberta",
            country: "Canada",
            city: "Edmonton, Alberta",
            founded: 1908,
            ranking: "126th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.ualberta.ca",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/University_of_Alberta_Logo.svg/1200px-University_of_Alberta_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1541339907198-e320a881b5b1?w=800",
            description: "Canada's premier research university with strong programs in engineering, medicine, and science.",
            programs: ["Engineering", "Medicine", "Law", "Science", "Business", "Arts"],
            tuitionFee: "CAD 26,000 - 46,000/year (International)",
            accommodation: "CAD 10,000 - 18,000/year",
            studentLife: "38,000+ students, thriving Edmonton community",
            admission: "IELTS 6.0+, bachelor's degree, competitive GPA",
            features: [
                "Strong engineering school",
                "Research-focused programs",
                "Affordable international fees",
                "Good career opportunities"
            ]
        },
        {
            id: "ca-005",
            name: "McMaster University",
            country: "Canada",
            city: "Hamilton, Ontario",
            founded: 1887,
            ranking: "152nd (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.mcmaster.ca",
            logo: "https://upload.wikimedia.org/wikipedia/en/e/ed/McMaster_University_Logo.svg",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "Known for innovative problem-based learning and strong healthcare programs.",
            programs: ["Medicine", "Engineering", "Science", "Health Sciences", "Business", "Humanities"],
            tuitionFee: "CAD 24,000 - 44,000/year (International)",
            accommodation: "CAD 9,000 - 17,000/year",
            studentLife: "38,000+ students, strong community engagement",
            admission: "IELTS 6.5+, bachelor's degree, relevant background",
            features: [
                "Problem-based learning",
                "Strong healthcare programs",
                "Affordable tuition",
                "Good research opportunities"
            ]
        }
    ],
    "UK": [
        {
            id: "uk-001",
            name: "University of Oxford",
            country: "UK",
            city: "Oxford",
            founded: 1096,
            ranking: "3rd (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.ox.ac.uk",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/University_of_Oxford.svg/1200px-University_of_Oxford.svg.png",
            image: "https://images.unsplash.com/photo-1567427181408-aeb21dcf43d3?w=800",
            description: "World's oldest university in continuous operation with unmatched academic reputation.",
            programs: ["Law", "Medicine", "Engineering", "Arts", "Science", "Social Sciences"],
            tuitionFee: "£18,000 - 38,000/year (International)",
            accommodation: "£8,000 - 15,000/year",
            studentLife: "25,000+ students, historic city of Oxford",
            admission: "IELTS 7.0+, strong bachelor's degree, entrance exams",
            features: [
                "World's oldest university",
                "Exceptional academic standards",
                "Legendary alumni network",
                "Tutorial system"
            ]
        },
        {
            id: "uk-002",
            name: "University of Cambridge",
            country: "UK",
            city: "Cambridge",
            founded: 1209,
            ranking: "2nd (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.cam.ac.uk",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/University_of_Cambridge_coat_of_arms_2.svg/1200px-University_of_Cambridge_coat_of_arms_2.svg.png",
            image: "https://images.unsplash.com/photo-1597933199837-06f0ddf7ca0c?w=800",
            description: "Second-oldest university in the English-speaking world with world-leading research.",
            programs: ["Mathematics", "Engineering", "Medicine", "Law", "Natural Sciences", "Humanities"],
            tuitionFee: "£18,000 - 38,000/year (International)",
            accommodation: "£8,000 - 15,000/year",
            studentLife: "20,000+ students, historic university city",
            admission: "IELTS 7.0+, strong academic record, entrance exams",
            features: [
                "Second-oldest university",
                "World-class research",
                "College system",
                "Outstanding faculty"
            ]
        },
        {
            id: "uk-003",
            name: "Imperial College London",
            country: "UK",
            city: "London",
            founded: 1907,
            ranking: "10th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.imperial.ac.uk",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Logo_of_the_Imperial_College_London.svg/1200px-Logo_of_the_Imperial_College_London.svg.png",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "Premier science, engineering, and technology university in the heart of London.",
            programs: ["Engineering", "Science", "Medicine", "Business", "Computing", "Aeronautics"],
            tuitionFee: "£28,000 - 48,000/year (International)",
            accommodation: "£10,000 - 18,000/year",
            studentLife: "20,000+ students, London location",
            admission: "IELTS 6.5+, strong technical background",
            features: [
                "Top science and engineering",
                "London location",
                "Strong research programs",
                "Industry partnerships"
            ]
        },
        {
            id: "uk-004",
            name: "University College London (UCL)",
            country: "UK",
            city: "London",
            founded: 1826,
            ranking: "8th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.ucl.ac.uk",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/UCL_Logo.svg/1200px-UCL_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1541339907198-e320a881b5b1?w=800",
            description: "Leading multidisciplinary university in London with exceptional research across all fields.",
            programs: ["Medicine", "Law", "Engineering", "Science", "Arts", "Business"],
            tuitionFee: "£18,000 - 40,000/year (International)",
            accommodation: "£9,000 - 17,000/year",
            studentLife: "44,000+ students, central London campus",
            admission: "IELTS 6.5-7.0+, strong bachelor's degree",
            features: [
                "Central London location",
                "World-class research",
                "Strong alumni network",
                "Diverse programs"
            ]
        },
        {
            id: "uk-005",
            name: "London School of Economics (LSE)",
            country: "UK",
            city: "London",
            founded: 1895,
            ranking: "40th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.lse.ac.uk",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/London_School_of_Economics_Logo.svg",
            image: "https://images.unsplash.com/photo-1598940244886-b37aadbc3e43?w=800",
            description: "World-leading institution for social sciences, economics, law, and management.",
            programs: ["Economics", "Law", "Business", "Social Sciences", "Management", "Finance"],
            tuitionFee: "£23,000 - 38,000/year (International)",
            accommodation: "£10,000 - 18,000/year",
            studentLife: "11,000+ students, London city center",
            admission: "IELTS 7.0+, strong background in field",
            features: [
                "Top economics school",
                "London location",
                "Excellent career outcomes",
                "Strong business programs"
            ]
        }
    ],
    "Germany": [
        {
            id: "de-001",
            name: "Heidelberg University",
            country: "Germany",
            city: "Heidelberg",
            founded: 1386,
            ranking: "87th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.uni-heidelberg.de",
            logo: "https://upload.wikimedia.org/wikipedia/de/c/cd/Universitaet_heidelberg.png",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "Germany's oldest university with strong research programs in science and humanities.",
            programs: ["Medicine", "Engineering", "Physics", "Mathematics", "Law", "Philosophy"],
            tuitionFee: "€1,500 - 2,000 per semester (Very low!)",
            accommodation: "€300 - 600/month",
            studentLife: "30,000+ students, historic city",
            admission: "IELTS 6.0+, bachelor's degree",
            features: [
                "Oldest German university",
                "Very low tuition fees",
                "Strong research",
                "Affordable living"
            ]
        },
        {
            id: "de-002",
            name: "Technical University of Munich (TUM)",
            country: "Germany",
            city: "Munich",
            founded: 1868,
            ranking: "46th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.tum.de",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/TU_Muenchen_Logo.svg/1200px-TU_Muenchen_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1541339907198-e320a881b5b1?w=800",
            description: "Germany's top engineering university with world-class technical programs.",
            programs: ["Engineering", "Physics", "Mathematics", "Chemistry", "Computer Science", "Mechanics"],
            tuitionFee: "€1,300 - 1,800 per semester",
            accommodation: "€350 - 700/month",
            studentLife: "46,000+ students, Munich location",
            admission: "IELTS 6.0+, strong technical background",
            features: [
                "Top engineering school",
                "Low tuition fees",
                "Industry partnerships",
                "Beautiful Munich"
            ]
        },
        {
            id: "de-003",
            name: "University of Berlin (Humboldt University)",
            country: "Germany",
            city: "Berlin",
            founded: 1810,
            ranking: "153rd (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.hu-berlin.de",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Humboldt-Universitaet_Berlin_Logo.svg/1200px-Humboldt-Universitaet_Berlin_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "Prestigious research university with programs across all disciplines in Berlin.",
            programs: ["Philosophy", "History", "Science", "Medicine", "Law", "Economics"],
            tuitionFee: "€1,200 - 1,500 per semester",
            accommodation: "€300 - 500/month",
            studentLife: "38,000+ students, vibrant Berlin",
            admission: "IELTS 5.5+, relevant background",
            features: [
                "Historic institution",
                "Very affordable fees",
                "Berlin cultural hub",
                "Strong humanities"
            ]
        },
        {
            id: "de-004",
            name: "University of Göttingen",
            country: "Germany",
            city: "Göttingen",
            founded: 1734,
            ranking: "126th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.uni-goettingen.de",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Logo_Universitaet_Goettingen.svg/1200px-Logo_Universitaet_Goettingen.svg.png",
            image: "https://images.unsplash.com/photo-1598940244886-b37aadbc3e43?w=800",
            description: "One of Germany's most prestigious research universities with Nobel Prize winners.",
            programs: ["Physics", "Chemistry", "Mathematics", "Biology", "Medicine", "Engineering"],
            tuitionFee: "€1,100 - 1,400 per semester",
            accommodation: "€250 - 450/month",
            studentLife: "30,000+ students, academic city",
            admission: "IELTS 5.5+, strong academic record",
            features: [
                "44 Nobel Prize winners",
                "Strong in STEM",
                "Very affordable",
                "Research-focused"
            ]
        },
        {
            id: "de-005",
            name: "University of Frankfurt",
            country: "Germany",
            city: "Frankfurt",
            founded: 1914,
            ranking: "234th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.uni-frankfurt.de",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Goethe_University_logo.svg/1200px-Goethe_University_logo.svg.png",
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800",
            description: "Research university in Frankfurt offering programs in multiple disciplines.",
            programs: ["Law", "Medicine", "Economics", "Biology", "Physics", "Chemistry"],
            tuitionFee: "€1,000 - 1,300 per semester",
            accommodation: "€300 - 600/month",
            studentLife: "47,000+ students, Frankfurt city",
            admission: "IELTS 5.5+, bachelor's degree",
            features: [
                "Low tuition costs",
                "Frankfurt business hub",
                "Diverse programs",
                "Strong research"
            ]
        }
    ],
    "Netherlands": [
        {
            id: "nl-001",
            name: "University of Amsterdam",
            country: "Netherlands",
            city: "Amsterdam",
            founded: 1632,
            ranking: "57th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.uva.nl",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/UvA_Logo.svg/1200px-UvA_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "Leading research university in Amsterdam offering international programs.",
            programs: ["Law", "Medicine", "Economics", "Engineering", "Sciences", "Business"],
            tuitionFee: "€2,000 - 20,000/year (Depends on program)",
            accommodation: "€600 - 1,000/month",
            studentLife: "53,000+ students, vibrant Amsterdam",
            admission: "IELTS 6.5+, bachelor's degree",
            features: [
                "Amsterdam location",
                "English-taught programs",
                "Strong research",
                "Diverse student body"
            ]
        },
        {
            id: "nl-002",
            name: "Delft University of Technology",
            country: "Netherlands",
            city: "Delft",
            founded: 1842,
            ranking: "42nd (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.tudelft.nl",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/TU_Delft_logo.svg/1200px-TU_Delft_logo.svg.png",
            image: "https://images.unsplash.com/photo-1541339907198-e320a881b5b1?w=800",
            description: "Netherlands' leading technical university with world-class engineering programs.",
            programs: ["Engineering", "Architecture", "Computer Science", "Physics", "Mathematics", "Materials"],
            tuitionFee: "€2,000 - 25,000/year",
            accommodation: "€500 - 900/month",
            studentLife: "25,000+ students, technical focus",
            admission: "IELTS 6.5+, engineering background",
            features: [
                "Top engineering school",
                "Strong tech focus",
                "Industry partnerships",
                "Practical approach"
            ]
        },
        {
            id: "nl-003",
            name: "Utrecht University",
            country: "Netherlands",
            city: "Utrecht",
            founded: 1636,
            ranking: "73rd (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.uu.nl",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_Utrecht_University.svg/1200px-Logo_Utrecht_University.svg.png",
            image: "https://images.unsplash.com/photo-1598940244886-b37aadbc3e43?w=800",
            description: "Comprehensive research university in Utrecht with strong programs across disciplines.",
            programs: ["Medicine", "Science", "Engineering", "Law", "Economics", "Humanities"],
            tuitionFee: "€2,000 - 20,000/year",
            accommodation: "€500 - 900/month",
            studentLife: "40,000+ students, historic city",
            admission: "IELTS 6.0+, bachelor's degree",
            features: [
                "Comprehensive university",
                "English-taught programs",
                "Beautiful city",
                "Strong academics"
            ]
        },
        {
            id: "nl-004",
            name: "Leiden University",
            country: "Netherlands",
            city: "Leiden",
            founded: 1575,
            ranking: "76th (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.leiden.edu",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Leiden_University_Logo.svg/1200px-Leiden_University_Logo.svg.png",
            image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800",
            description: "Historic research university with strong programs in arts, sciences, and law.",
            programs: ["Law", "Medicine", "Science", "Humanities", "Social Sciences", "Engineering"],
            tuitionFee: "€1,900 - 20,000/year",
            accommodation: "€450 - 800/month",
            studentLife: "30,000+ students, historic city",
            admission: "IELTS 6.0+, relevant background",
            features: [
                "Historic institution",
                "Strong academics",
                "Affordable fees",
                "Beautiful Leiden"
            ]
        },
        {
            id: "nl-005",
            name: "Erasmus University Rotterdam",
            country: "Netherlands",
            city: "Rotterdam",
            founded: 1913,
            ranking: "123rd (QS World Rankings 2024)",
            type: "Public Research University",
            website: "https://www.eur.nl",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Erasmus_University_Rotterdam_logo.svg/1200px-Erasmus_University_Rotterdam_logo.svg.png",
            image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            description: "Research university known for strong business and social science programs.",
            programs: ["Business", "Economics", "Law", "Medicine", "Engineering", "Social Sciences"],
            tuitionFee: "€2,000 - 22,000/year",
            accommodation: "€500 - 900/month",
            studentLife: "29,000+ students, Rotterdam",
            admission: "IELTS 6.5+, bachelor's degree",
            features: [
                "Top business programs",
                "English-taught courses",
                "Modern city",
                "Good career outcomes"
            ]
        }
    ]
};

// Function to get colleges for a specific country
function getCollegesForCountry(countryName) {
    return universityDatabase[countryName] || [];
}

// Function to get college details by ID
function getCollegeDetails(collegeId) {
    for (let country in universityDatabase) {
        const college = universityDatabase[country].find(c => c.id === collegeId);
        if (college) return college;
    }
    return null;
}

// Function to search colleges by name
function searchColleges(searchTerm) {
    let results = [];
    for (let country in universityDatabase) {
        results = results.concat(
            universityDatabase[country].filter(c => 
                c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.country.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }
    return results;
}
