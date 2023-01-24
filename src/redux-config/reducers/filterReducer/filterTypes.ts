export interface FiltersState {
  filters: FilterState[];
}

export interface FilterState {
  id: number;
  body: string;
  checked: boolean;
}
