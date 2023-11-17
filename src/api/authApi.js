import { axiosInstanceToken } from "../utils/axiosCreate";

class AuthApi {
  endPoints = {
    logIn: "/auth/log-in",
    signUp: "/auth/sign-up",
    signUpTeacher: "/auth/sign-up-teacher",
    verifyEmail: "/auth/verify-email",
    forgetPassword: "/auth/forget-password",
    checkPasswordResetToken: "/auth/check-token",
    resetPassword: "/auth/reset-password",
    loadUser: "/auth/load-user",
    logOut: "/auth/logOut",
  };

  logIn = async (input) => {
    // console.log("input ", input);
    let data = await axiosInstanceToken.post(this.endPoints.logIn, input);
    // console.log("data ", data);
    return data;
  };

  loadUser = async () => {
    // console.log("input ", input);
    let data = await axiosInstanceToken.post(this.endPoints.loadUser);
    console.log("data ", data);
    return data;
  };

  signUp = async (input) => {
    let data = await axiosInstanceToken.post(this.endPoints.signUp, input);
    // .then((res) => res.data);
    return data;
  };

  verifyEmail = async (input) => {
    let data = await axiosInstanceToken.post(this.endPoints.verifyEmail, input);
    // .then((res) => res.data);
    return data;
  };

  forgetPassword = async (input) => {
    let data = await axiosInstanceToken.post(
      this.endPoints.forgetPassword,
      input
    );
    // .then((res) => res.data);
    return data;
  };

  checkPasswordResetToken = async (input) => {
    let data = await axiosInstanceToken.post(
      this.endPoints.checkPasswordResetToken,
      input
    );
    // .then((res) => res.data);
    return data;
  };

  resetPassword = async (input) => {
    let data = await axiosInstanceToken.post(
      this.endPoints.resetPassword,
      input
    );
    // .then((res) => res.data);
    return data;
  };

  checkUser = async (token) => {
    // let token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      let data = await axiosInstanceToken.get(`/auth/check-me/${token}`);
      // .then((res) => res.data)
      // .then((data) => {
      //   // user is valid
      //   // console.log(data?.data);
      //   dispatch(loadUserInfo(data?.data));
      // })
      // .catch((e) => {
      //   console.log(e);
      //   console.log("Error: ", e?.response?.statusText);
      //   dispatch(signOutReducer());
      // })
      // .finally(() => {
      //   dispatch(loadingFinishedReducer("isLoadingUser"));
      // });
      return data;
    }
  };
}

export default new AuthApi();
