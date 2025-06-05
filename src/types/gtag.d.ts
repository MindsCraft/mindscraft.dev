interface Window {
  gtag: (
    command: 'config' | 'event' | 'js',
    targetId: string,
    config?: {
      page_path?: string;
      page_location?: string;
      page_title?: string;
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
} 