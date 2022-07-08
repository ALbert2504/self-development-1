export type Theatre = {
  name: string;
  image: string;
  date: string;
  createdAt: string;
  _id: string;
};

interface ITheatreState {
  theatres: Theatre[];
}