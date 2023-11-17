import Cookies from "js-cookie";
import Button from "../atoms/button/button";
import courseApi from "../../api/courseApi";
type Props = {};

export default function NotFound({}: Props) {
  console.log("cookie ", Cookies.get("accessToken"));
  const test = async () => {
    let res = await courseApi.createCourse({});
    console.log(res);
  };
  return (
    <div>
      <Button handleClick={test}>Click</Button>
    </div>
  );
}
