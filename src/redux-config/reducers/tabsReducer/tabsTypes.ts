export interface TabsState {
  tabs: TabState[];
}

export interface TabState {
  id: number;
  body: string;
  active: boolean;
}
