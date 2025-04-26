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

export class Train {
  public consists: Array<Consist>

  get total_mass(): number {
    return this.consists.reduce((p: number, c: Consist) => p + c.mass, 0)
  }

  get total_length(): number {
    return this.consists.reduce((p: number, c: Consist) => p + c.length, 0)
  }

  get total_cars(): number {
    return this.consists.reduce((p: number, c: Consist) => p + c.cars, 0)
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
}
