export function logEvent(eventName: string, params?: Record<string, any>) {
  console.log('Analytics event:', eventName, params);
}
