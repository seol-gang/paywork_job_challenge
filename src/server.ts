import app from "./app";

const server: any = app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(`Listening on PORT ${process.env.SERVER_PORT}`);
});

export default server;
