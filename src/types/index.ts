export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface CupStep {
    percentage: string;
    fill: number;
    title: string;
    description: string;
    showSteam: boolean;
    showCheck: boolean;
}

export interface StoreLink {
  icon: string
  topLabel: string
  name: string
  href: string
}