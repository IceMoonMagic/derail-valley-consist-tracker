import { type Locomotive, LOCOMOTIVES } from "./stations"

export class Consist {
  public order: string
  public mass: number
  public length: number
  public cars: number
  public destination: string

  constructor(
    order: string,
    mass: number,
    length: number,
    cars: number,
    dst: string,
  ) {
    this.order = order
    this.mass = mass
    this.length = length
    this.cars = cars
    this.destination = dst
  }
}

export class Engine implements Locomotive {
  public loco_code: string
  public facing_right: boolean = false
  public running: boolean = true

  get locomotive(): Locomotive {
    let result = LOCOMOTIVES.get(this.loco_code)
    if (result === undefined) {
      result = LOCOMOTIVES.get("undefined")
      if (result === undefined) {
        throw new Error(`Bad loco_code: ${this.loco_code}`)
      }
    }
    return result
  }

  get name(): string {
    return this.locomotive.name
  }
  get mass(): number {
    return this.locomotive.mass
  }
  get length(): number {
    return this.locomotive.length
  }
  get load_rating(): number {
    return this.locomotive.load_rating
  }
  get color(): string {
    return this.locomotive.color
  }

  constructor(code: string) {
    this.loco_code = code
  }
}

export class Train {
  public consists: Array<Consist | Engine>

  get total_mass(): number {
    return this.consists.reduce(
      (p: number, c: Consist | Engine) => p + c.mass,
      0,
    )
  }

  get total_length(): number {
    return this.consists.reduce(
      (p: number, c: Consist | Engine) => p + c.length,
      0,
    )
  }

  get total_cars(): number {
    return this.consists.reduce(
      (p: number, c: Consist | Engine) =>
        p + (c instanceof Consist ? c.cars : 1),
      0,
    )
  }

  get total_load_rating(): number {
    return this.consists.reduce(
      (p: number, c: Consist | Engine) =>
        p + (c instanceof Engine && c.running ? c.load_rating : 0),
      0,
    )
  }

  constructor(consists: Array<Consist>) {
    this.consists = consists
    if (consists === undefined) {
      this.consists = []
    }
  }

  public new_consist(): void {
    this.consists.push(new Consist("-FH-", 0, 0, 1, "-"))
  }

  public new_engine(): void {
    this.consists.push(new Engine("DE2"))
  }
}
