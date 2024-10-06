"use client";
import store from "@/app/redux/store";
import { Provider } from "react-redux";
import "flatpickr/dist/flatpickr.css";
import { ReactNode } from "react";
import BaseLayout from "@/app/BaseLayout";

interface AppProps {
  children: ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <Provider store={store}>
      <BaseLayout>{children}</BaseLayout>
    </Provider>
  );
}
