import managementLibraryImg from '../assets/img/projects/management_library/management-library.png';
import managementLibraryUI from '../assets/img/projects/management_library/ui_management_library.png';
import managementLibraryERD from '../assets/img/projects/management_library/erd_management_library.png';

import publicComplaintImg from '../assets/img/projects/public_complaint/public complaint.png';
import publicComplaintUI from '../assets/img/projects/public_complaint/ui_public_complaint.png';
import publicComplaintERD from '../assets/img/projects/public_complaint/erd_public_complaint.png';

import wgsCutiImg from '../assets/img/projects/wgs_cuti/wgs cuti.png';
import wgsCutiUI from '../assets/img/projects/wgs_cuti/ui_wgs_cuti.png';
import wgsCutiERD from '../assets/img/projects/wgs_cuti/erd_wgs_cuti.png';

import sibeningImg from '../assets/img/projects/sibening/sibening.png';
import sibeningUI from '../assets/img/projects/sibening/ui_sibening.png';
import sibeningERD from '../assets/img/projects/sibening/erd_sibening.png';

export const projectsData = {
  "wgs-cuti": {
    name: "WGS Cuti",
    role: "Back-end Developer",
    image: wgsCutiImg,
    uiImage: wgsCutiUI,
    erdImage: wgsCutiERD,
    tags: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    problem: "The leave management process at PT Walden Global Services was previously carried out manually through email and calculations by HR, making data tracking difficult, causing inaccuracies in leave balances, and leaving employees with no transparency regarding their leave entitlement.",
    solution: "WGS Cuti is a web application that simplifies leave submission, approval, and record-keeping in a single centralized system. This application allows employees to apply for leave independently and provides direct access to view remaining leave entitlements, while HR can manage all data more neatly and efficiently.",
    impact: "WGS Leave has a significant impact, making the leave administration process much faster, more accurate, and transparent. HR no longer needs to perform manual calculations, and employees can monitor their leave entitlement. This system is now used internally and is planned to become part of the WGS Super Apps.",
    features: [
      "Independent leave submission for employees",
      "Leave balance tracking",
      "Centralized approval workflow for HR",
      "Detailed leave history and reporting",
      "Automated balance calculations"
    ]
  },
  "management-library": {
    name: "Management Library",
    role: "Full-stack Developer",
    image: managementLibraryImg,
    uiImage: managementLibraryUI,
    erdImage: managementLibraryERD,
    tags: ["PHP", "Laravel", "Livewire", "MySQL"],
    problem: "The management of books, members, and transactions in the library was previously still manual, making data tracking difficult and often causing service delays.",
    solution: "Management Library is a web-based application designed to simplify integrated library data management. This application provides features for managing books, members, and borrowing/return transactions, making administrative processes more efficient and structured.",
    impact: "With this application, libraries can manage collections and services more quickly, accurately, and easily accessible by both librarians and members.",
    features: [
      "Book management",
      "Member registration and profiles",
      "Borrowing and returning system",
      "Transaction history tracking",
      "Availability status"
    ]
  },
  "public-complaint": {
    name: "Public Complaint",
    role: "Full-stack Developer",
    image: publicComplaintImg,
    uiImage: publicComplaintUI,
    erdImage: publicComplaintERD,
    tags: ["React.js", "Laravel", "MySQL"],
    problem: "Previous community reports were often slow to be responded to due to a system that was still manual and lacked transparency.",
    solution: "Public Complaints is a web-based application designed to make it easier for the public to submit complaints online, while also assisting authorities in verifying, processing, and following up on these reports efficiently.",
    impact: "With this application, the process of handling public complaints becomes faster, more transparent, and well-structured.",
    features: [
      "Online complaint submission",
      "Complaint status tracking,",
      "Verification and follow-up dashboard for authorities",
      "Transparency in response times",
      "Consolidated reporting and analytics"
    ]
  },
  "sibening": {
    name: "SiBening (Sistem informasi Bimbingan Elektronik & Konseling)",
    role: "Back-end Developer",
    image: sibeningImg,
    uiImage: sibeningUI,
    erdImage: sibeningERD,
    tags: ["PHP", "Laravel", "MySQL"],
    problem: "The counseling process in schools is still limited to face-to-face interactions, making it difficult for students to convey their problems quickly and in a structured manner due to limitations of time, place, and opportunity.",
    solution: "SiBening is a web-based information system that provides a platform for students to communicate with counselor teachers more easily, while also making it easier for teachers to monitor and handle student issues in an organized manner.",
    impact: "With this application, the counseling process becomes faster, more transparent, and provides a more effective communication space between students and teachers.",
    features: [
      "Private communication channel for students",
      "Case management dashboard for counselor teachers",
      "Structured problem reporting",
      "Appointment scheduling for sessions",
      "Secure data handling for student privacy"
    ]
  }
};
