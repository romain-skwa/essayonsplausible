"use client";

import Script from "next/script";

export default function PlausibleAnalytics() {
  return (
    <>
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible = window.plausible || function(){(plausible.q = plausible.q || []).push(arguments)}; plausible.init = plausible.init || function(i){plausible.o = i || {}}; plausible.init();`}
      </Script>
      <Script
        src="https://plausible.io/js/pa-HZtkoyeEB8V8hoT_GTEo3.js"
        strategy="afterInteractive"
      />
    </>
  );
}
