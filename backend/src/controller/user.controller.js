import bcrypt from "bcrypt";
async function userController(req, res) {
  const pass = "jeevan";
  const { password } = req.query;
  const hashpass = await bcrypt.hash(password, 10);
  const ismatch = await bcrypt.compare(pass, hashpass);
  if (ismatch) {
    res.send("matched");
  } else {
    res.send("not matched");
  }
}
export { userController };
