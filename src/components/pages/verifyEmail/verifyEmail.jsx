import { useEffect, useState } from "react";
import Loader from "../../organisms/loader/loader";
import { Link, useParams } from "react-router-dom";
import authApi from "../../../api/authApi";
import Heading1 from "../../atoms/heading/heading1";

export default function VerifyEmail() {
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState("");
  const { authId, token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      if (authId && token) {
        try {
          const res = await authApi.verifyEmail({ authId, token });
          console.log(res?.data);
          setSuccess(true);
          setResponse(res?.data?.message);
        } catch (e) {
          // console.log(e);
          let message = "";
          if (e?.response?.message) {
            message = e?.response?.message;
          } else {
            message = "Failed to verify email.";
          }
          setResponse(message);
          setSuccess(false);
        } finally {
          setIsLoading(false);
        }
      }
    };
    verifyEmail();
  }, [authId, token]);

  //   console.log("response ", response);

  return (
    <div>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center sm:py-12">
        <div>
          {isLoading == false && (
            <div>
              {success ? (
                <Heading1 className="text-green-800">
                  {response} <br />
                  <Link
                    to="/login"
                    className="underline text-blue-500 hover:text-blue-800"
                  >
                    Login
                  </Link>
                </Heading1>
              ) : (
                <Heading1 className="text-red-500">{response}</Heading1>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
