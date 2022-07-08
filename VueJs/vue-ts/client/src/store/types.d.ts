export type User = {
  id: string | number;
  name: string;
};

interface IRootState {
  user: User | null;
}