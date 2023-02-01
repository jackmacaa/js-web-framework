import axios, { AxiosResponse } from 'axios';

const domain = 'http://localhost:3000';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName as keyof UserProps] || '';
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse = await axios.get(
      `${domain}/users/${this.get('id')}`
    );
    this.set(response.data);
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`${domain}/users/${id}`, this.data);
    } else {
      axios.post(`${domain}/users/${id}`, this.data);
    }
  }
}
