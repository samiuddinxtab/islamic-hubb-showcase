export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  return d.toLocaleDateString('en-US', defaultOptions);
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + '...';
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function generateMetaTitle(title: string, siteName: string = 'Islamic Hubb Institute'): string {
  if (!title || title === siteName) return siteName;
  return `${title} | ${siteName}`;
}

export function generateCanonicalUrl(path: string, siteUrl: string = 'https://islamichubb.org'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}

export function getCourseCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    quran: 'Quran Studies',
    arabic: 'Arabic Language',
    fiqh: 'Fiqh & Jurisprudence',
    aqeedah: 'Aqeedah & Theology',
    hadith: 'Hadith Studies',
    seerah: 'Seerah & History',
    tajweed: 'Tajweed & Recitation',
    'islamic-history': 'Islamic History',
  };
  return labels[category] || capitalize(category);
}

export function getCourseLevelLabel(level: string): string {
  const labels: Record<string, string> = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  };
  return labels[level] || capitalize(level);
}

export function getEventTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    seminar: 'Seminar',
    workshop: 'Workshop',
    conference: 'Conference',
    webinar: 'Webinar',
    community: 'Community Event',
  };
  return labels[type] || capitalize(type);
}

export function generateStars(rating: number): string[] {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push('full');
  }
  if (hasHalfStar) {
    stars.push('half');
  }
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push('empty');
  }

  return stars;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}
