import { Injectable } from '@nestjs/common';

// CRUD - Create Read Update Delete
// key UUID - JobId
// value ???

const jobsArr = [];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!. Go to /api/v1 for more.';
  }

  async createJob() {
    return { id: 101 }
  }

  async listAllJobs() {
    return jobsArr;
  }

  async getJob(id: string) {
    return jobsArr[id];
  }

  async updateJob(id: string, data: any) {
    return true;
  }

  async deleteJob(id: string) {
    return true;
  }
}
