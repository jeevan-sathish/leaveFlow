import { verifyUserExist } from "../services/auth.loginService.js";
async function loginController(req, res) {
  const { name, email, password } = req.body;
  const isUserExist = await verifyUserExist(name, email, password);
  if (isUserExist.status) {
    return res.json({
      detail: {
        user_name: name,
        user_email: email,
        message_status: isUserExist.result,
        access_token: isUserExist.access_token,
        refresh_token: isUserExist.refresh_token,
      },
    });
  } else {
    return res.json({
      detail: {
        user_name: name,
        user_email: email,
        message_status: isUserExist.result,
      },
    });
  }
}
export { loginController };
