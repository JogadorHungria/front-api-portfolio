import { string } from "zod"

export interface IUser  {
    certificate: Array<any>
    contact_phone: string
    email: string
    git_hub_perfil: string
    linkedin_perfil:string
    project: Array<any>
    stacks: Array<any>
    user_id: number
    username: string
} 

export interface IUserCreate {
	email: string
	password: string,
	username: string,
	linkedin_perfil: string,
	contact_phone: string,
	git_hub_perfil: string
}