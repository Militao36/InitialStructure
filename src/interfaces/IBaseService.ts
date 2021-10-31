export interface IBaseService{
  save: (data: any) => Promise<void>
  update (data: any, id: string): Promise<void>
  findById (id: string): Promise<any>
  findByIdOrFail (id: string): Promise<any>
  delete (id: string): Promise<void>
}