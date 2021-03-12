import Axios from "axios";

const axios = Axios.create({
  /**
   * Add base URl here for api call.  One point means easier change from development
   * production endpoints.
   */
});

export default axios;
