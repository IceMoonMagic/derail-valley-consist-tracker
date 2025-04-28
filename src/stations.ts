export interface Job {
  name: string
  code: string
  color: string
}

export const JOBS: Job[] = [
  {
    name: "Freight Haul",
    code: "FH",
    color: "#67e363",
  },
  {
    name: "Logistical Haul",
    code: "LH",
    color: "#e3ca63",
  },
  {
    name: "Shunting Unloading",
    code: "SU",
    color: "#e56e65",
  },
  {
    name: "Shunting Loading",
    code: "SL",
    color: "#e56e65",
  },
]

export interface Station {
  name: string
  code: string
  color: string
  tracks: string[]
}

export const STATIONS: Station[] = [
  {
    name: "Coal Mine East",
    code: "CME",
    color: "#686968",
    tracks: [],
  },
  {
    name: "Coal Mine South",
    code: "CMS",
    color: "#4e554e",
    tracks: [],
  },
  {
    name: "Coal Power Plant",
    code: "CP",
    color: "#583d3c",
    tracks: [],
  },
  {
    name: "City South",
    code: "CS",
    color: "#99aec3",
    tracks: [],
  },
  {
    name: "City West",
    code: "CW",
    color: "#a7a7a7",
    tracks: [],
  },
  {
    name: "Food Factory & Town",
    code: "FF",
    color: "#77a6e2",
    tracks: [],
  },
  {
    name: "Farm",
    code: "FM",
    color: "#deaa4d",
    tracks: [],
  },
  {
    name: "Forest Central",
    code: "FRC",
    color: "#91b66a",
    tracks: [],
  },
  {
    name: "Forest South",
    code: "FRS",
    color: "#609260",
    tracks: [],
  },
  {
    name: "Goods Factory & Town",
    code: "GF",
    color: "#c87fa2",
    tracks: [],
  },
  {
    name: "Harbor & Town",
    code: "HB",
    color: "#816c94",
    tracks: [],
  },
  {
    name: "Iron Mine East",
    code: "IME",
    color: "#b56962",
    tracks: [],
  },
  {
    name: "Iron Mine West",
    code: "IMW",
    color: "#9a5947",
    tracks: [],
  },
  {
    name: "Military Base",
    code: "MB",
    color: "#988c5e",
    tracks: [],
  },
  {
    name: "Machine Factory & Town",
    code: "MF",
    color: "#dc885a",
    tracks: [],
  },
  {
    name: "Oil Refinery",
    code: "OR",
    color: "#945578",
    tracks: [],
  },
  {
    name: "Oil Well Central",
    code: "OWC",
    color: "#555a62",
    tracks: [],
  },
  {
    name: "Oil Well North",
    code: "OWN",
    color: "#625d55",
    tracks: [],
  },
  {
    name: "Steel Mill",
    code: "SM",
    color: "#7b8394",
    tracks: [],
  },
  {
    name: "Sawmill",
    code: "SW",
    color: "#cda888",
    tracks: [],
  },
]

export function job_color_from_order(order: string): string {
  let match = /\w?\w?-(\w\w)-?\d?\d?/.exec(order)
  return match !== null ? job_color_from_code(match[1]) : "#FFFFFF"
}

export function job_color_from_code(code: string): string {
  let job: Job | undefined = JOBS.find((s) => s.code == code.toUpperCase())
  return job?.color || "#FFFFFF"
}

export function station_color_from_order(order: string): string {
  let match = /(\w\w\w?)-?\w?\w?-?\d?\d?/.exec(order)
  return match !== null ? station_color_from_code(match[1]) : "#FFFFFF"
}

export function station_color_from_track(track: string): string {
  let match = /(\w\w\w?)-?\w?\d?\w?/.exec(track)
  return match !== null ? station_color_from_code(match[1]) : "#FFFFFF"
}

export function station_color_from_code(code: string): string {
  let station: Station | undefined = STATIONS.find(
    (s) => s.code == code.toUpperCase(),
  )
  return station?.color || "#FFFFFF"
}

export interface Locomotive {
  name: string
  mass: number
  length: number
  load_rating: number
  color: string
}

export const LOCOMOTIVES: Map<string, Locomotive> = new Map([
  [
    "undefined",
    {
      name: "Undefined",
      mass: 0,
      length: 0,
      load_rating: 0,
      color: "#FFF",
    },
  ],
  [
    "BE2",
    {
      name: "BE2-260 Microshunter",
      mass: 12,
      length: 4,
      load_rating: 100,
      color: "#d0c86e",
    },
  ],
  [
    "DE2",
    {
      name: "DE2-480 Shunter",
      mass: 38,
      length: 7.49,
      load_rating: 370,
      color: "#e1dda2",
    },
  ],
  [
    "DE6",
    {
      name: "DE6-860",
      mass: 125,
      length: 18.78,
      load_rating: 1320,
      color: "#cfa66d",
    },
  ],
  [
    "DE6S",
    {
      name: "DE6 Slug",
      mass: 125,
      length: 16.94,
      load_rating: 230, // inferred approx from wiki
      color: "#cfa66d",
    },
  ],
  [
    "DE6S2",
    {
      name: "DE6 Slug",
      mass: 125,
      length: 16.94,
      load_rating: 660, // inferred approx from wiki
      color: "#cfa66d",
    },
  ],
  [
    "DH4",
    {
      name: "DH4-670 Diesel Road-Switcher",
      mass: 80,
      length: 13,
      load_rating: 800,
      color: "#ac665c",
    },
  ],
  [
    "DM1U",
    {
      name: "DM1U Utility Rail Vehicle",
      mass: 10,
      length: 14.4,
      load_rating: 100,
      color: "#cfc86d",
    },
  ],
  [
    "DM3",
    {
      name: "DM3-540 Diesel Shunter",
      mass: 52,
      length: 8.5,
      load_rating: 960,
      color: "#70b8cb",
    },
  ],
  [
    "S060",
    {
      name: "S060-440 Steam Shunter",
      mass: 45,
      length: 9.1,
      load_rating: 560,
      color: "#90d270",
    },
  ],
  [
    "S282",
    {
      name: "S282-730",
      mass: 175,
      length: 22,
      load_rating: 1390,
      color: "#9fa09a",
    },
  ],
])
