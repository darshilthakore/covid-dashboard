import { Delta } from './delta';

export class Citydetails {
    city: string;
    active: number;
    confirmed: number;
    deceased: number;
    recovered: number;
    delta: Delta;
}