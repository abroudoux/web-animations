import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import router from "@/lib/router";
import { ThemeProvider } from "@/config/theme-provider";

import Layout from "@/components/Layout";
import { Toaster } from "@/components/ui/toaster";

import "@/style/index.css";
import "@/style/layouts.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <RouterProvider router={router} />
        <Toaster />
      </Layout>
    </ThemeProvider>
  </StrictMode>
);
