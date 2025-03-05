// Adds ENV to the window type
interface Window {
  ENV: {
    SERVER_URL: string;
    SENDGRID_URL: string;
    SENDGRID_API_KEY: string;
    SENDGRID_LIST_ID: string;
  };
  gtag: (
    command: string,
    event: string,
    params?: Record<string, string | boolean>
  ) => void;
}
