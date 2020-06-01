import axios from "axios";
let url;
axios.defaults.baseURL = "http://localhost:3000/api";
const fakeGroupId = "5eb8d9d80ed17248ec36af75";
class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/group/${this.groupId}/meetups`;
  }
  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }
}
export { MeetupApi };
