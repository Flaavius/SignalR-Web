import { HttpTransportType, HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel } from "@microsoft/signalr";

export interface IHubConnection {
  connect: (hub: string) => Promise<void>;
  close: () => Promise<void>;
}

export {
  HubConnectionState,
};

export const createConnection = (apiUrl, {
  onClose = () => {},
  onData = (data: string) => {},
} = {}) => {
  let con: HubConnection | null = null;

  return {
    connect: async (hub) => {
      con = new HubConnectionBuilder()
        .configureLogging(LogLevel.Trace)
        .withUrl(`${apiUrl}/${hub}`, HttpTransportType.WebSockets)
        .build();
      con.onclose = onClose;
      con.on("data", (data) => {
        console.log("DT", data);
      });
      con.on("send", (data) => {
        console.log("data", data);
      })
      return await con.start();
    },
    close: async () => {
      if (!con) return;

      if (con.state === HubConnectionState.Connected) {
        await con.stop();
      }

      con = null;
    },
  }  as IHubConnection;
};