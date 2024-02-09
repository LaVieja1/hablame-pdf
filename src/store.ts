import { writable } from "svelte/store";

export const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  CHAT_MODE: 2,
  ERROR: -1,
};

export const appStatus = writable(APP_STATUS.CHAT_MODE);
export const appStatusInfo = writable({
  id: "8a931b7137f3c3ddfd2463286721f96d",
  url: "https://res.cloudinary.com/djvf2vnbp/image/upload/v1707521449/pdf/nson8xzgwhjo8pcprxrm.pdf",
  pages: 1,
});

export const setAppStatusLoading = () => {
  appStatus.set(APP_STATUS.LOADING);
};

export const setAppStatusError = () => {
  appStatus.set(APP_STATUS.ERROR);
};

export const setAppStatusChatMode = ({
  id,
  url,
  pages,
}: {
  id: string;
  url: string;
  pages: number;
}) => {
  appStatus.set(APP_STATUS.CHAT_MODE);
  appStatusInfo.set({ id, url, pages });
};
