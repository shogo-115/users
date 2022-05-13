import { memo, useEffect, VFC } from "react";
import { useHistory } from "react-router-dom";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useMessage } from "../../hooks/useMessage";

export const Setting: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  const { showMessage } = useMessage();
  const history = useHistory();

  useEffect(() => {
    if (!loginUser) {
      showMessage({ title: "ログインしてください", status: "error" });
      history.push("/");
    }
  });

  return <p>設定ページ</p>;
});
