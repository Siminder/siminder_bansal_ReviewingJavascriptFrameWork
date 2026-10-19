export interface Cat {
  id:number
  name:string;
  coatLength:number| string;
  Colors:string;
  location:string;
  traits:string;
  hasShots?: boolean;
}

export interface CatEvent {
  id: number;
  action: 'opened' | 'favourited';
}
