import { axiosInstanceToken } from "../utils/axiosCreate";

class CourseApi {
  endPoints = {
    createCourse: "/course/insert",
  };

  createCourse = async (input) => {
    let data = await axiosInstanceToken.post(
      this.endPoints.createCourse,
      input
    );
    return data;
  };
}

export default new CourseApi();
