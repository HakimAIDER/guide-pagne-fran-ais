
export enum Page {
  Home = 'Home',
  Retirement = 'Retirement',
  Employee = 'Employee',
  LifeInsurance = 'LifeInsurance',
  Simulator = 'Simulator',
}

export interface SimulationResult {
  year: number;
  totalContributions: number;
  totalInterest: number;
  finalCapital: number;
}
