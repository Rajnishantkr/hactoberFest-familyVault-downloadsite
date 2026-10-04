// Realistic demo data for Family Vault interactive showcases

export const FAMILY_MEMBERS = [
  { id: "all", name: "All Members", relation: "Entire Vault", docCount: 14, icon: "Users" },
  { id: "you", name: "Akshay (Self)", relation: "Self", docCount: 5, avatar: "X", role: "Primary Vault Admin" },
  { id: "father", name: "Rajesh (Father)", relation: "Father", docCount: 3, avatar: "F", role: "Member" },
  { id: "mother", name: "Sunita (Mother)", relation: "Mother", docCount: 3, avatar: "M", role: "Member" },
  { id: "children", name: "Children", relation: "Kids", docCount: 3, avatar: "C", role: "Dependent" }
];

export const CATEGORIES = [
  { id: "all", name: "All Categories", count: 14 },
  { id: "identity", name: "Identity", count: 4, icon: "ShieldCheck" },
  { id: "medical", name: "Medical", count: 2, icon: "HeartPulse" },
  { id: "insurance", name: "Insurance", count: 3, icon: "Umbrella" },
  { id: "financial", name: "Financial", count: 2, icon: "ReceiptText" },
  { id: "property", name: "Property", count: 1, icon: "Home" },
  { id: "education", name: "Education", count: 2, icon: "GraduationCap" }
];

export const DEMO_DOCUMENTS = [
  {
    id: "doc-1",
    title: "Aadhaar National Identity Card",
    category: "identity",
    ownerId: "you",
    ownerName: "Akshay",
    fileType: "PDF",
    fileSize: "1.4 MB",
    pages: 1,
    verified: true,
    addedDate: "2026-08-14",
    lastAccessed: "2 days ago",
    extractedFields: {
      "Full Name": "Akshay",
      "Identification Number": "XXXX-XXXX-8924",
      "Date of Birth": "1994-08-24",
      "Gender": "Male",
      "Address": "Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103"
    },
    ocrSnippet: "GOVERNMENT OF INDIA ... UNIQUE IDENTIFICATION AUTHORITY ... Akshay ... DOB: 24/08/1994 ... GENDER: MALE ... 560103",
    localAiNotes: "Classified as Indian National Identity (Aadhaar). Extracted 12-digit VID mask, registered address, and date of birth with 100% confidence.",
    tags: ["ID", "Government", "KYC", "Address Proof"],
    expiryDate: null,
    storagePath: "C:\\Users\\Local\\AppData\\Roaming\\FamilyVault\\store\\id_aadhaar_Akshay.vault"
  },
  {
    id: "doc-2",
    title: "Star Comprehensive Family Health Policy",
    category: "insurance",
    ownerId: "you",
    ownerName: "Family Floater",
    fileType: "PDF",
    fileSize: "3.8 MB",
    pages: 6,
    verified: true,
    addedDate: "2026-07-02",
    lastAccessed: "1 week ago",
    extractedFields: {
      "Policy Name": "Star Comprehensive Health Insurance Plan",
      "Policy Number": "POL-STAR-778921-2026",
      "Sum Insured": "INR 15,00,000",
      "Covered Members": "Self, Spouse, 2 Children",
      "Renewal Date": "2027-06-30",
      "TPA Contact": "1800-425-2255"
    },
    ocrSnippet: "POLICY SCHEDULE - STAR HEALTH AND ALLIED INSURANCE ... POLICY NO: POL-STAR-778921-2026 ... SUM INSURED: RS 15,00,000 ... VALID TILL: 30-JUN-2027",
    localAiNotes: "Medical policy schedule. Identified 4 insured dependents, cashless hospital network ID, and critical renewal deadline.",
    tags: ["Health", "Insurance", "Medical Emergency", "Floater"],
    expiryDate: "2027-06-30",
    storagePath: "C:\\Users\\Local\\AppData\\Roaming\\FamilyVault\\store\\ins_star_health_policy.vault"
  },
  {
    id: "doc-3",
    title: "Republic of India Passport (Akshay)",
    category: "identity",
    ownerId: "father",
    ownerName: "Akshay",
    fileType: "PDF",
    fileSize: "2.1 MB",
    pages: 2,
    verified: true,
    addedDate: "2026-05-18",
    lastAccessed: "3 weeks ago",
    extractedFields: {
      "Full Name": "Akshay Kumar",
      "Passport Number": "Z5489210",
      "Date of Birth": "1963-11-12",
      "Place of Issue": "Patna",
      "Date of Expiry": "2027-03-15"
    },
    ocrSnippet: "PASSPORT REPUBLIC OF INDIA ... P<IND<<Akshay<<<<<<<<<<<<<<<<<<<<<< ... Z5489210<8IND6311124M2703158<<<<<<<<<<<<<<<4",
    localAiNotes: "Machine Readable Travel Document (MRTD Type 3). Parsed MRZ string successfully. Flagged passport renewal window within next 6 months.",
    tags: ["Passport", "Travel", "Visa", "Father"],
    expiryDate: "2027-03-15",
    storagePath: "C:\\Users\\Local\\AppData\\Roaming\\FamilyVault\\store\\passport_father_Akshay.vault"
  },
  {
    id: "doc-4",
    title: "Apartment Sale Deed & Title Registration",
    category: "property",
    ownerId: "father",
    ownerName: "Rajesh",
    fileType: "PDF",
    fileSize: "14.2 MB",
    pages: 24,
    verified: true,
    addedDate: "2026-03-10",
    lastAccessed: "Last month",
    extractedFields: {
      "Property Description": "Flat No 402, 4th Floor, Block B, Silver Oak Enclave",
      "Registration Number": "BK-I-9042-2018",
      "Sub-Registrar Office": "Koramangala, Bengaluru",
      "Execution Date": "2018-09-14",
      "Khata Type": "A Khata"
    },
    ocrSnippet: "DEED OF ABSOLUTE SALE ... REGISTERED AS DOCUMENT NO 9042/2018 ... BOOK I ... VOLUME 412 ... SCHEDULE PROPERTY FLAT 402",
    localAiNotes: "Encumbrance-free title deed scan. Identified property boundary schedules, stamp duty receipt registration, and joint holding split.",
    tags: ["Property", "Asset", "Legal", "Original Deed"],
    expiryDate: null,
    storagePath: "C:\\Users\\Local\\AppData\\Roaming\\FamilyVault\\store\\prop_sale_deed_flat402.vault"
  },
  {
    id: "doc-5",
    title: "Senior Citizen Health Card (Rajesh)",
    category: "medical",
    ownerId: "mother",
    ownerName: "Rajesh",
    fileType: "PNG",
    fileSize: "850 KB",
    pages: 1,
    verified: true,
    addedDate: "2026-06-22",
    lastAccessed: "5 days ago",
    extractedFields: {
      "Beneficiary Name": "Rajesh",
      "Card ID": "CGHS-BLR-893021",
      "Blood Group": "B Positive (B+)",
      "Primary Dispensary": "Dispensary 04, Indiranagar",
      "Emergency Contact": "+91 98450 XXXXX"
    },
    ocrSnippet: "CENTRAL GOVT HEALTH SCHEME ... BENEFICIARY: Rajesh ... BLOOD GROUP: B+ ... VALIDITY: LIFETIME SENIOR PENSIONER",
    localAiNotes: "Medical identity card. Identified emergency contact, blood group classification, and dispensary locator code.",
    tags: ["Medical", "CGHS", "Senior", "Mother"],
    expiryDate: null,
    storagePath: "C:\\Users\\Local\\AppData\\Roaming\\FamilyVault\\store\\med_cghs_Rajesh.vault"
  },
  {
    id: "doc-6",
    title: "Birth Certificate & Immunization Record",
    category: "education",
    ownerId: "children",
    ownerName: "XYZ",
    fileType: "PDF",
    fileSize: "1.9 MB",
    pages: 2,
    verified: true,
    addedDate: "2026-02-14",
    lastAccessed: "2 weeks ago",
    extractedFields: {
      "Child Name": "XYZ",
      "Registration Number": "BBMP/B/2021/004812",
      "Date of Birth": "2021-04-10",
      "Place of Birth": "Hospital Center, Old Airport Rd",
      "Mother": "Akshay",
      "Father": "twinkle"
    },
    ocrSnippet: "BRUHAT BENGALURU MAHANAGARA PALIKE ... CERTIFICATE OF BIRTH ... XYZ ... DATE OF REGISTRATION: 15-04-2021",
    localAiNotes: "Municipal birth certificate. Parsed official seal, registration index, and verified lineage mapping.",
    tags: ["Birth Certificate", "Child", "School Admission", "Vital Record"],
    expiryDate: null,
    storagePath: "C:\\Users\\Local\\AppData\\Roaming\\FamilyVault\\store\\birth_xyz_bbmp.vault"
  },
  {
    id: "doc-7",
    title: "Income Tax Return Verification (ITR-V FY25-26)",
    category: "financial",
    ownerId: "you",
    ownerName: "Akshay",
    fileType: "PDF",
    fileSize: "620 KB",
    pages: 1,
    verified: true,
    addedDate: "2026-07-28",
    lastAccessed: "1 month ago",
    extractedFields: {
      "Assessee": "Akshay",
      "PAN Number": "ABCDE1234F",
      "Assessment Year": "2026-27",
      "e-Filing Acknowledgment": "981273918237912",
      "Total Income Computed": "INR 28,45,000"
    },
    ocrSnippet: "INDIAN INCOME TAX RETURN VERIFICATION FORM ... ASSESSMENT YEAR 2026-27 ... ACKNOWLEDGEMENT NUMBER: 981273918237912 ... VERIFIED VIA AADHAAR OTP",
    localAiNotes: "Tax assessment document. Extracted PAN number, filing timestamp, and financial year bracket.",
    tags: ["Taxes", "ITR", "Financial", "Proof of Income"],
    expiryDate: null,
    storagePath: "C:\\Users\\Local\\AppData\\Roaming\\FamilyVault\\store\\tax_itrv_fy2526.vault"
  }
];

// Interactive Document Intelligence Pipeline Stages
export const PIPELINE_STAGES = [
  {
    id: "stage-doc",
    step: "01",
    name: "Document Ingestion",
    engine: "Local File System",
    subtitle: "Original document file enters the local processing queue",
    description: "PDF, scans, smartphone camera captures, or scanned TIFFs are ingested directly from your local hard drive. No internet connection is ever requested.",
    technicalBadge: "Local Disk I/O",
    previewData: {
      type: "Document",
      filename: "HDFC_Ergo_Health_Policy_Schedule.pdf",
      size: "2.4 MB",
      format: "PDF (v1.7)",
      resolution: "300 DPI scanned raster + text layer"
    }
  },
  {
    id: "stage-ocr",
    step: "02",
    name: "Tesseract OCR Extraction",
    engine: "Tesseract OCR Engine (Local)",
    subtitle: "High-accuracy optical character recognition without cloud APIs",
    description: "Tesseract runs as an offline native binary on your processor. It isolates bounding boxes, recognizes multilingual glyphs, and converts pixel matrices into raw UTF-8 streams.",
    technicalBadge: "Native CPU / AVX2",
    previewData: {
      type: "OCR Stream",
      rawSample: `HDFC ERGO GENERAL INSURANCE COMPANY LIMITED
POLICY NO: 2814 2001 9841 0000 00
INSURED PERSON: Akshay
POLICY PERIOD: 15-AUG-2025 TO 14-AUG-2026
SUM INSURED: INR 10,00,000
EMERGENCY CLAIMS DESK: 1800-2666-400`
    }
  },
  {
    id: "stage-ai",
    step: "03",
    name: "Local AI Comprehension",
    engine: "Ollama (On-Device LLM)",
    subtitle: "Natural language entity extraction via local quantized models",
    description: "Ollama processes the raw OCR stream entirely on your local machine. It understands document semantics, identifies the document type, extracts critical entities, dates, and holders, and formats structured metadata.",
    technicalBadge: "Ollama Local Inference",
    previewData: {
      type: "JSON Extraction",
      jsonSample: {
        "document_type": "Health Insurance Policy",
        "issuing_entity": "HDFC ERGO General Insurance",
        "policy_holder": "Akshay",
        "policy_number": "2814 2001 9841 0000 00",
        "coverage_amount": "INR 10,00,000",
        "expiry_date": "2026-08-14",
        "requires_renewal_alert": true
      }
    }
  },
  {
    id: "stage-vault",
    step: "04",
    name: "Vault Indexing & Security",
    engine: "Encrypted SQLite Engine",
    subtitle: "Instant sub-millisecond retrieval & zero-cloud storage",
    description: "The document is indexed into Family Vault's local database. Full-text search indices are compiled on your device, enabling instant offline search, expiry notifications, and form autocompletion.",
    technicalBadge: "Local SQLite + Full-Text Search",
    previewData: {
      type: "Vault Record",
      status: "Verified & Searchable",
      indexTime: "18ms",
      networkCalls: "0 bytes transferred",
      vaultStorage: "%APPDATA%/FamilyVault/vault.db"
    }
  }
];

// Interactive Form Assistant Scenarios
export const FORM_DEMO_SCENARIOS = [
  {
    id: "visa",
    formName: "Schengen Tourist Visa Application",
    department: "Consular Services Portal",
    fields: [
      {
        id: "f_name",
        label: "Applicant Full Name",
        type: "text",
        placeholder: "Enter full name as in passport",
        suggestedValue: "Akshay",
        sourceDoc: "Republic of India Passport (Page 1)",
        sourceCategory: "Identity"
      },
      {
        id: "f_dob",
        label: "Date of Birth (YYYY-MM-DD)",
        type: "text",
        placeholder: "YYYY-MM-DD",
        suggestedValue: "1994-08-24",
        sourceDoc: "Birth Certificate & Passport",
        sourceCategory: "Vital Record"
      },
      {
        id: "f_passport",
        label: "Travel Document / Passport Number",
        type: "text",
        placeholder: "Passport Number",
        suggestedValue: "Z5489210",
        sourceDoc: "Passport (Akshay)",
        sourceCategory: "Travel"
      },
      {
        id: "f_address",
        label: "Permanent Residential Address",
        type: "text",
        placeholder: "Street, City, Postal Code",
        suggestedValue: "Flat 402, Green Glen Layout, Bellandur, Bengaluru 560103",
        sourceDoc: "Aadhaar Card & Property Deed",
        sourceCategory: "Address Proof"
      }
    ]
  },
  {
    id: "health",
    formName: "Hospital TPA Cashless Claim Form",
    department: "Emergency Desk Admission",
    fields: [
      {
        id: "f_patient",
        label: "Patient Name",
        type: "text",
        placeholder: "Patient Full Name",
        suggestedValue: "Akshay",
        sourceDoc: "Senior Citizen Health Card (CGHS)",
        sourceCategory: "Medical"
      },
      {
        id: "f_policy",
        label: "Health Insurance Policy Number",
        type: "text",
        placeholder: "Policy ID",
        suggestedValue: "POL-STAR-778921-2026",
        sourceDoc: "Star Comprehensive Family Health Policy",
        sourceCategory: "Insurance"
      },
      {
        id: "f_blood",
        label: "Blood Group",
        type: "text",
        placeholder: "e.g. O+, B+",
        suggestedValue: "B Positive (B+)",
        sourceDoc: "CGHS Health Card Record",
        sourceCategory: "Medical"
      },
      {
        id: "f_contact",
        label: "Emergency Contact Phone",
        type: "text",
        placeholder: "10-digit number",
        suggestedValue: "+91 98450 71290",
        sourceDoc: "Verified Emergency Contact Sheet",
        sourceCategory: "Family Profile"
      }
    ]
  }
];
