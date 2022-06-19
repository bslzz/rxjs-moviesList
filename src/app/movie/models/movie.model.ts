export interface IMovie {
  id: number;
  name: string;
  genre: string;
  image: string;
  releaseYear: string;
}

export const movies: IMovie[] = [
  {
    id: 1,
    name: 'Shutter Island',
    genre: 'Thriller',
    image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg',
    releaseYear: '2020',
  },
];
