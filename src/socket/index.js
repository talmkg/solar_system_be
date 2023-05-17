let onlineUsers = [];

export const connection_handler = (newClient) => {
  console.log("NEW CONNECTION:", newClient.id);
  newClient.emit("welcome", { message: `Welcome, ${newClient.id}.` });
  //   newClient.on("Login", (payload) => {
  //     onlineUsers.push({
  //       _id: payload._id,
  //       username: payload.username,
  //       socketId: newClient.id,
  //     });
  //     console.log(onlineUsers);
  //     newClient.emit("loggedIn", onlineUsers);
  //     newClient.broadcast.emit("updateOnlineUsersList", onlineUsers);
  //   });

  //   newClient.on("sendMessage", (message) => {
  //     console.log(message);
  //     const saveToMongo = async () => {
  //       const data = {
  //         username: message.username,
  //         pfp: message.pfp,
  //         user_id: message.user_id,
  //         text: message.text,
  //       };
  //       const newmessage = new messageModel(data);
  //       const { _id } = await newmessage.save();
  //       console.log(_id);
  //     };

  //     newClient.broadcast.emit("newMessage", message);
  //     saveToMongo();
  //   });
};
