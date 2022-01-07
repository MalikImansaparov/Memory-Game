export type UserType = {
  name: string
  surname: string
  email: string
  validity: {
    name: boolean
    surname: boolean
    email: boolean
  },
  settings: {
    difficulty: string
    cards: string
  },
  score: number
  data64: string
  ssn: string
};

export type IndexDbType = {
  DB_NAME: string
  DB_VERSION: number
  DB_STORE_NAME: string
  db: IDBDatabase | null

  openDb: never
  clearObjectStore: () => void
  getObj: (ssn: string) => never
  putObj: (newUser: UserType) => void
  getLength: () => never
};
