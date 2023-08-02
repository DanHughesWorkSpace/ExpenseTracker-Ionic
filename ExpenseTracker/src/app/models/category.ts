export interface CategoryDto {
  id?: number;
  type?: string;
  name?: string;
  description?: string;
  created_Date?: string;
  created_By?: 1;
}

export type Category = Required<CategoryDto>;
