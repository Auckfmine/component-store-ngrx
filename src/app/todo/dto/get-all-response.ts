export type IGetAllResponse<T, K extends string> = {
  [key in K]: T[];
} & {
  total: number;
  skip: number;
  limit: number;
};
