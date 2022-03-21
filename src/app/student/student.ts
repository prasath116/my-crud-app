import { College } from "../college/college";
import { Department } from "../department/department";

export interface Student {
    id: number;
	college: College;
	department: Department;
	name: string;
	age:number;
}
