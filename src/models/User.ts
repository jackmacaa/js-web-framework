import axios, { AxiosResponse } from 'axios';

const domain = 'http://localhost:3000';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName as keyof UserProps] || '';
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
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
