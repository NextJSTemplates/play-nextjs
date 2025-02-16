import { Price } from "@/types/price";
import { FaAward, FaChalkboardTeacher, FaUniversity } from "react-icons/fa";

export const pricingData: Price[] = [
  {
    id: "price_1NQk5TLtGdPVhGLecVfQ7mn0",
    unit_amount: 100 * 100,
    nickname: "Up to $5,000 in cash awards",
    icon: FaAward,
    offers: [
      "1st place - $2,500",
      "2nd place - $1,500",
      "3rd place - $1,000",
    ],
  },
  {
    id: "price_1NQk55LtGdPVhGLefU8AHqHr",
    unit_amount: 200 * 100,
    nickname: "Mentorship opportunities with experts from Google and Global Disability Innovation Hub (GDI Hub), University College of London.",
    icon: FaChalkboardTeacher,
    offers: [
    ],
  },
  {
    id: "price_1NQk4eLtGdPVhGLeZsZDsCNz",
    unit_amount: 300 * 100,
    nickname: "Potential MSc Scholarship Opportunities at the Human-Computer Interaction lab, Department of Computer Science, University of Ghana.",
    icon: FaUniversity,
    offers: [
    ],
  },
];