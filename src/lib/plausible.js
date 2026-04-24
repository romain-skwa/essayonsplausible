export function getPlausibleConfig() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  const baseUrl =
    process.env.NEXT_PUBLIC_PLAUSIBLE_BASE_URL?.trim() || "https://plausible.io";

  if (!domain) {
    return null;
  }

  return {
    domain,
    scriptSrc: `${baseUrl.replace(/\/$/, "")}/js/script.js`,
  };
}

export function sendPlausibleEvent(eventName, props) {
  if (
    globalThis.window === undefined ||
    typeof globalThis.window.plausible !== "function"
  ) {
    return;
  }

  globalThis.window.plausible(eventName, props ? { props } : undefined);
}
