/**
 * Course data extracted from transcripts:
 * - Kozhan_UTU_ToR.pdf (University of Turku)
 * - opintosuoritusote_2025-07-21.pdf (Metropolia UAS)
 * - Suoritusote (Aalto Open University)
 */

export const coursesByInstitution = {
  'ivan-franko': {
    name: 'Ivan Franko National University of Lviv',
    period: '2019–2023',
    programme: 'Bachelor of Law',
    description: 'Law degree with comprehensive studies in civil, criminal, and international law.',
    courses: [
      { slug: 'analytical-economy', name: 'Analytical Economy', credits: 3, grade: 'C', gradeDesc: 'Good' },
      { slug: 'foreign-language', name: 'Foreign Language', credits: 14, grade: 'C', gradeDesc: 'Good' },
      { slug: 'history-state-law-foreign', name: 'History of State and Law of Foreign Countries', credits: 5, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'history-state-law-ukraine', name: 'History of State and Law of Ukraine', credits: 5, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'constitutional-law-ukraine', name: 'Constitutional Law of Ukraine', credits: 5, grade: 'C', gradeDesc: 'Good' },
      { slug: 'logics', name: 'Logics', credits: 3, grade: 'C', gradeDesc: 'Good' },
      { slug: 'sociology', name: 'Sociology', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'theory-philosophy-law', name: 'Theory and Philosophy of Law', credits: 8, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'life-safety', name: 'Life Safety', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'history-ukrainian-culture', name: 'History of Ukrainian Culture', credits: 3, grade: 'B', gradeDesc: 'Passed' },
      { slug: 'international-human-rights', name: 'International Human Rights Standards', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'roman-private-law', name: 'Roman Private Law', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'judicial-law-enforcement', name: 'Judicial and Law Enforcement Agencies of Ukraine', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'ukrainian-language-professional', name: 'Ukrainian Language (for Professional Purposes)', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'administrative-law-ukraine', name: 'Administrative Law of Ukraine', credits: 7.5, grade: 'B', gradeDesc: 'Good' },
      { slug: 'criminal-law-general', name: 'Criminal Law of Ukraine (General Part)', credits: 8.5, grade: 'C', gradeDesc: 'Good' },
      { slug: 'legal-sociology', name: 'Legal Sociology', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'self-presentation-public', name: 'Self-Presentation in Public Speeches', credits: 3, grade: 'B', gradeDesc: 'Passed' },
      { slug: 'labor-law-ukraine', name: 'Labor Law of Ukraine', credits: 7, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'philosophy', name: 'Philosophy', credits: 3, grade: 'B', gradeDesc: 'Good' },
      { slug: 'civil-law-general', name: 'Civil Law of Ukraine (General Part)', credits: 8.5, grade: 'C', gradeDesc: 'Good' },
      { slug: 'legal-documentation', name: 'Legal Documentation', credits: 3, grade: 'B', gradeDesc: 'Passed' },
      { slug: 'business-processes-hr', name: 'Business Processes and HR Analytics', credits: 3, grade: 'B', gradeDesc: 'Passed' },
      { slug: 'constitutional-procedural', name: 'Constitutional Procedural Law of Ukraine', credits: 4, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'proprietary-right', name: 'Proprietary Right in Ukraine', credits: 3.5, grade: 'B', gradeDesc: 'Passed' },
      { slug: 'commercial-law', name: 'Commercial Law', credits: 3.5, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'democracy-theory-practice', name: 'Democracy: From Theory to Practice', credits: 3, grade: 'B', gradeDesc: 'Passed' },
      { slug: 'intellectual-property', name: 'Intellectual Property', credits: 3, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'criminal-law-special', name: 'Criminal Law of Ukraine (Special Part)', credits: 7.5, grade: 'C', gradeDesc: 'Good' },
      { slug: 'criminal-executive-law', name: 'Criminal-Executive Law of Ukraine', credits: 4, grade: 'E', gradeDesc: 'Passed' },
      { slug: 'criminal-procedural', name: 'Criminal-Procedural Law of Ukraine', credits: 6, grade: 'C', gradeDesc: 'Good' },
      { slug: 'financial-law-ukraine', name: 'Financial Law of Ukraine', credits: 3, grade: 'B', gradeDesc: 'Good' },
      { slug: 'civil-law-special', name: 'Civil Law of Ukraine (Special Part)', credits: 8, grade: 'B', gradeDesc: 'Good' },
      { slug: 'constitutional-conflictology', name: 'Constitutional Conflictology', credits: 4, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'eu-law-fundamentals', name: 'Fundamentals of European Union Law', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'political-ethics-cinema', name: 'Political Ethics in Cinema', credits: 3, grade: 'D', gradeDesc: 'Passed' },
      { slug: 'professional-ethics-lawyer', name: 'Professional Ethics of a Lawyer', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'family-law', name: 'Family Law', credits: 3.5, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'administrative-procedural', name: 'Administrative Procedural Law of Ukraine', credits: 3, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'environmental-law-ukraine', name: 'Environmental Law of Ukraine', credits: 3, grade: 'B', gradeDesc: 'Good' },
      { slug: 'essay-european-studies', name: 'Essay on European Studies', credits: 4.5, grade: 'C', gradeDesc: 'Passed' },
      { slug: 'criminalistics', name: 'Criminalistics', credits: 4, grade: 'E', gradeDesc: 'Satisfactory' },
      { slug: 'international-private-law', name: 'International Private Law', credits: 3, grade: 'B', gradeDesc: 'Good' },
      { slug: 'municipal-law-ukraine', name: 'Municipal Law of Ukraine', credits: 3, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'occupational-health', name: 'Occupational Health', credits: 3, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'political-legal-teachings', name: 'Political and Legal Teachings: History and Modernity', credits: 3, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'legal-aspects-activity-network', name: 'Legal Aspects of Activity in the Network', credits: 4.5, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'civil-procedural-law', name: 'Civil Procedural Law of Ukraine', credits: 5, grade: 'C', gradeDesc: 'Good' },
      { slug: 'corporate-law', name: 'Corporate Law', credits: 3, grade: 'C', gradeDesc: 'Good' },
      { slug: 'international-public-law', name: 'International Public Law', credits: 3, grade: 'B', gradeDesc: 'Good' },
      { slug: 'legal-letter', name: 'Legal Letter', credits: 3.5, grade: 'C', gradeDesc: 'Passed' },
      { slug: 'employment-commercial-law', name: 'Legal Relations of Employment in Commercial Law', credits: 3.5, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'decision-making-legal', name: 'Ways and Forms of Decision-Making: Legal and Psychological Aspects', credits: 3.5, grade: 'A', gradeDesc: 'Passed' },
      { slug: 'training-practice-local', name: 'Training Practice (Local Governments, Administrations)', credits: 4.5, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'training-practice-court', name: 'Training Practice (Court, Prosecutor\'s Office, Bar, Legal Services)', credits: 6, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'academic-course-paper-1', name: 'Academic Course Paper 1', credits: 1, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'academic-course-paper-2', name: 'Academic Course Paper 2', credits: 1, grade: 'A', gradeDesc: 'Excellent' },
      { slug: 'academic-course-paper-3', name: 'Academic Course Paper 3', credits: 1, grade: 'C', gradeDesc: 'Good' },
      { slug: 'attestation-constitutional', name: 'Attestation Exam: Constitutional Law of Ukraine', credits: 0.5, grade: 'D', gradeDesc: 'Satisfactory' },
      { slug: 'attestation-criminal', name: 'Attestation Exam: Criminal Law of Ukraine', credits: 0.5, grade: 'C', gradeDesc: 'Good' },
      { slug: 'attestation-civil', name: 'Attestation Exam: Civil Law of Ukraine', credits: 0.5, grade: 'D', gradeDesc: 'Satisfactory' },
    ],
  },
  'university-of-turku': {
    name: 'University of Turku',
    period: 'Autumn 2022',
    faculty: 'Faculty of Law',
    programme: 'Exchange student',
    courses: [
      { slug: 'legal-aspects-acting-online', name: 'Legal Aspects of Acting Online', code: 'OTMV2029', credits: 5, grade: '5', date: '19.10.2022' },
      { slug: 'international-law', name: 'International Law', code: 'ONOM1007', credits: 6, grade: '1', date: '01.10.2022' },
      { slug: 'client-counselling-negotiation', name: 'Client Counselling and Negotiation in English', code: 'KIEN2664', credits: 3, grade: 'PASS', date: '13.12.2022' },
      { slug: 'employee-inventions-legal-innovation', name: 'Employee Inventions and Legal Innovation Management in Multinational Company', code: 'TLS_0094', credits: 4, grade: '5', date: '04.10.2022' },
      { slug: 'challenging-legal-truth', name: 'Challenging the Legal Truth', code: 'TLS_0099', credits: 3, grade: '3', date: '24.11.2022' },
      { slug: 'european-studies-essay', name: 'European Studies Essay', code: 'POLH6043', credits: 5, grade: '3', date: '25.12.2022' },
    ],
  },
  metropolia: {
    name: 'Metropolia University of Applied Sciences',
    period: '2024–2028',
    programme: 'Degree Programme in European Business Administration',
    courses: [
      { slug: 'gateway-business-studies', name: 'Gateway to Business Studies', nameFi: 'Orientaatio liiketalouden opintoihin', credits: 5, grade: '4', date: '28.01.2025' },
      { slug: 'it-tools', name: 'IT Tools', nameFi: 'IT-työvälineet', credits: 5, grade: '4', date: '20.12.2024' },
      { slug: 'economics', name: 'Economics', nameFi: 'Kansantalous', credits: 5, grade: '4', date: '27.12.2024' },
      { slug: 'business-accounting', name: 'Business Accounting', nameFi: 'Laskentatoimen perusteet', credits: 5, grade: '5', date: '18.12.2024' },
      { slug: 'communication-global-business', name: 'Communication for Global Business', nameFi: 'Liike-elämän viestintä globaalissa maailmassa', credits: 5, grade: '5', date: '28.05.2025' },
      { slug: 'business-mathematics-statistics', name: 'Business Mathematics and Statistics', nameFi: 'Liiketalouden matematiikka ja tilastollinen analyysi', credits: 5, grade: '5', date: '13.05.2025' },
      { slug: 'finance', name: 'Finance', nameFi: 'Rahoitus', credits: 5, grade: '3', date: '08.04.2025' },
      { slug: 'supply-chain-management', name: 'Supply Chain Management', nameFi: 'Toimitusketjun hallinta', credits: 5, grade: '5', date: '29.04.2025' },
      { slug: 'marketing', name: 'Marketing', nameFi: 'Markkinointi', credits: 5, grade: '4', date: '29.05.2025' },
      { slug: 'finnish-2', name: 'Finnish 2 (A2.1)', nameFi: 'Suomi 2 (A2.1)', credits: 5, grade: '5', date: '17.12.2024' },
      { slug: 'finnish-3', name: 'Finnish 3 (A2.1-A2.2)', nameFi: 'Suomi 3 (A2.1-A2.2)', credits: 5, grade: '4', date: '14.05.2025' },
      { slug: 'market-entry-strategies-metropolia', name: 'Market Entry Strategies for Entrepreneurial Business', code: '25E52000', credits: 6, grade: '4', date: '12.03.2025', note: 'Aalto University' },
      { slug: 'leadership-in-action-metropolia', name: 'Leadership in Action', credits: 6, grade: '4', date: '12.03.2025', note: 'Aalto University' },
    ],
  },
  aalto: {
    name: 'Aalto University Open University',
    period: '2024',
    courses: [
      { slug: 'entrepreneurship-innovation-management', name: 'Entrepreneurship and Innovation Management', code: '25C00200', credits: 3, grade: '5', date: '21.04.2024' },
      { slug: 'leadership-in-action', name: 'Leadership in Action', code: 'MNGT-C1008', credits: 6, grade: '4', date: '19.04.2024' },
      { slug: 'market-entry-strategies', name: 'Market Entry Strategies for Entrepreneurial Business', code: '25E52000', credits: 6, grade: '4', date: '15.04.2024' },
      { slug: 'digitalisation-markets-consumption', name: 'Digitalisation of Markets and Consumption', code: 'MARK-E0046', credits: 6, grade: '3', date: '11.04.2024' },
    ],
  },
};

// Flat map for lookup by slug
export const allCourses = (() => {
  const list = [];
  Object.entries(coursesByInstitution).forEach(([instKey, inst]) => {
    inst.courses.forEach((c) => {
      list.push({ ...c, institution: inst.name, institutionKey: instKey, programme: inst.programme, period: inst.period });
    });
  });
  return list;
})();

export function getCourseBySlug(slug) {
  return allCourses.find((c) => c.slug === slug);
}

export function getInstitutionBySlug(slug) {
  return coursesByInstitution[slug] || null;
}

export const institutionSummaries = {
  'ivan-franko': {
    slug: 'ivan-franko',
    name: 'Ivan Franko National University of Lviv',
    degree: 'Bachelor of Law',
    period: '2019–2023',
    shortName: 'Ivan Franko, Lviv',
    description: 'Law degree with comprehensive studies in civil, criminal, and international law.',
  },
  'university-of-turku': { slug: 'university-of-turku', shortName: 'University of Turku' },
  metropolia: { slug: 'metropolia', shortName: 'Metropolia' },
  aalto: { slug: 'aalto', shortName: 'Aalto Open University' },
};
