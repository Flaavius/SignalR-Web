import { HubConnection, HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";

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
      con = new HubConnectionBuilder().withUrl(`${apiUrl}/${hub}`).build();
      con.onclose = onClose;
      con.on("data", onData);
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