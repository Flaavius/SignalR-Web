import React, { FunctionComponent, useEffect, useState } from "react";
import cls from "classnames";
import { createConnection, HubConnectionState, IHubConnection } from "../../services/signalRConnection";

import { Button, TextField } from "@material-ui/core";

import style from "./header.scss";
import { GET } from "../../services/http";

interface IHeaderProps {
  api: string;
  onData?: (data: string) => void;
}

interface IConnectionInfo {
  state: HubConnectionState;
}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const {
    api,
    onData = () => {},
  } = props;

  let con: IHubConnection | undefined;

  const [ { state }, setConnectionInfo ] = useState<Partial<IConnectionInfo>>({
    state: HubConnectionState.Disconnected,
  });

  const [ hub, setHub ] = useState("");

  useEffect(() => {
    con = createConnection(api, {
      onClose: () => setConnectionInfo({ state: HubConnectionState.Disconnected }),
      onData,
    });
  });

  const onButtonClick = async () => {
    if (!con) return;
    try {
      if (state === HubConnectionState.Connected) {
        return await con.close();
      }
      await con.connect(hub);
    } catch (error) {
      alert("Something wrong happened, please check the console");
      console.error(error);
    }
  };

  const onPingClick = () => {
    GET(api)
      .then(data => alert(data))
      .catch(err => console.error(err));
  };

  return (<div className={style["wrapper"]}>
    <div className={style["brand"]}>
      <h1>SignalR Web</h1>
    </div>
    <div className={style["connection"]}>
      <div className={style["left-section"]}>
        <Button
          onClick={onPingClick}
          color="primary"
          variant="outlined"
        >
          PING
        </Button>
      </div>
      <div className={style["right-section"]}>
        <div className={style["input-wrapper"]} >
          <TextField
            value={hub}
            label="Chat Hub"
            onChange={(ev) => setHub(ev.target.value)}
            disabled={state === HubConnectionState.Connected}
            variant="standard"
            name="chat-hub"
            type="text"
          />
        </div>
        <Button
          onClick={onButtonClick}
          className={cls(style["button"], {
            active: state === HubConnectionState.Connected,
          })}
          color="primary"
          variant="outlined"
        >
          {state === HubConnectionState.Connected ? "Stop" : "Connect"}
        </Button>
      </div>
    </div>
  </div>);
};

export default Header;
