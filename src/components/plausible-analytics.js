"use client";

import Script from "next/script";
import { getPlausibleConfig } from "@/lib/plausible";

export default function PlausibleAnalytics() {
  const config = getPlausibleConfig();

  if (!config) {
    return null;
  }

  return (
    <>
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };`}
      </Script>
      <Script
        src={config.scriptSrc}
        data-domain={config.domain}
        strategy="afterInteractive"
      />
    </>
  );
}
