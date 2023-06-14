/*
R complements and overrides T.

Example.

interface Original {
  a: number;
  b: string;
}

interface Changes {
  a: boolean;
  c: string;
}

type Modified = Modify<Original, Changes>;
interface Modified {
  a: boolean;
  b: string;
  c: string;
}
*/
export type Modify<T, R> = Omit<T, keyof R> & R;
