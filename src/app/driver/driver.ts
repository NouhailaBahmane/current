import { Vehicle } from "../vehicle/vehicle";

export class Driver {
    constructor(public id?: number,
        public firstName?: string,
        public lastName?: string,
        public vehicle?: Vehicle,
        public photo?: string
    ){

    }
}
