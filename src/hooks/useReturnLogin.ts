import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useReturnLogin = () => {
  const { loginUser } = useLoginUser();
  const { showMessage } = useMessage();
  const history = useHistory();

  const returnLogin: any = useCallback(() => {
    if (!loginUser) {
      showMessage({ title: "ログインしてください", status: "error" });
      history.push("/");
    }

    return { returnLogin };
  }, []);
};
