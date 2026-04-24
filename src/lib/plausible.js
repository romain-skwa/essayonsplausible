export function sendPlausibleEvent(eventName, props) {
  if (
    globalThis.window === undefined ||
    typeof globalThis.window.plausible !== "function"
  ) {
    return;
  }

  globalThis.window.plausible(eventName, props ? { props } : undefined);
}
