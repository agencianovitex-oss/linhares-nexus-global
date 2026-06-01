export interface Office {
  city: string;
  state: string;
  address: string;
  zip: string;
  role: "Sede" | "Escritório Regional";
  coords: string;
}

export const offices: Office[] = [
  {
    city: "Orlando",
    state: "Flórida",
    address: "2295 S Hiawassee Rd, Suite 414",
    zip: "Orlando, FL 32835",
    role: "Sede",
    coords: "28.5° N · 81.3° W",
  },
  {
    city: "Miami",
    state: "Flórida",
    address: "1200 Brickell Ave, #1950",
    zip: "Miami, FL 33131",
    role: "Escritório Regional",
    coords: "25.7° N · 80.1° W",
  },
  {
    city: "New York",
    state: "Nova York",
    address: "77 Madison Ave, 6th Floor",
    zip: "New York, NY",
    role: "Escritório Regional",
    coords: "40.7° N · 74.0° W",
  },
  {
    city: "Salt Lake City",
    state: "Utah",
    address: "136 E S Temple, #1400",
    zip: "Salt Lake City, UT",
    role: "Escritório Regional",
    coords: "40.7° N · 111.8° W",
  },
];
