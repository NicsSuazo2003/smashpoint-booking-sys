export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME ?? 'Smash Point',
  demoMode: (import.meta.env.VITE_DEMO_MODE ?? 'false') === 'true',
  apiUrl: import.meta.env.VITE_API_BASE_URL ?? 'https://pickleballcourbookingv2-e064.onrender.com',
  tagline: 'Dink Fast. Smash Hard.',
  established: '2026',
  paymentNumber: '09XX XXX XXXX', // TODO: real GCash number
  paymentAccountName: 'Smash Point Pickle Sports Center',
  developer: 'Astravex Systems',
  paymentTimerSeconds: 15 * 60,
  defaultMaxAdvanceBookingDays: 90,
};

export const FIXED_SLOT = {
  start: '16:00',
  end: '18:00',
  label: '2hr Fixed',
  description: '4:00 PM - 6:00 PM',
  hours: 2,
};

export const ADMIN_CREDENTIALS = {
  email: 'admin@smashpoint.com',
  password: 'Admin123!',
};

export const BOOKING_STATUS_META: Record<
  string,
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  pending_payment: {
    label: 'Pending Payment',
    color: 'text-warning',
    bg: 'bg-warning/15',
    border: 'border-warning/40',
    dot: 'bg-warning',
  },
  payment_submitted: {
    label: 'Payment Submitted',
    color: 'text-primary-300',
    bg: 'bg-primary-600/20',
    border: 'border-primary-400/40',
    dot: 'bg-primary-400',
  },
  confirmed: {
    label: 'Confirmed',
    color: 'text-success',
    bg: 'bg-success/15',
    border: 'border-success/40',
    dot: 'bg-success',
  },
  completed: {
    label: 'Completed',
    color: 'text-primary-200',
    bg: 'bg-primary-600/30',
    border: 'border-primary-400/50',
    dot: 'bg-primary-300',
  },
  cancelled: {
    label: 'Cancelled',
    color: 'text-error',
    bg: 'bg-error/15',
    border: 'border-error/40',
    dot: 'bg-error',
  },
  rejected: {
    label: 'Rejected',
    color: 'text-error',
    bg: 'bg-error/15',
    border: 'border-error/40',
    dot: 'bg-error',
  },
  expired: {
    label: 'Expired',
    color: 'text-cream-muted',
    bg: 'bg-neutral-800/50',
    border: 'border-neutral-700',
    dot: 'bg-neutral-500',
  },
  refunded: {
    label: 'Refunded',
    color: 'text-purple-300',
    bg: 'bg-purple-500/15',
    border: 'border-purple-500/40',
    dot: 'bg-purple-400',
  },
};

export const COURT_IMAGES = {
  hero: '/images/bg.jpg',
  court1: '/images/bg.jpg',
  court2: '/images/bg.jpg',
  court3: '/images/bg.jpg',
  gallery1: '/images/bg.jpg',
  gallery2: '/images/bg.jpg',
  gallery3: '/images/bg.jpg',
  gallery4: '/images/bg.jpg',
  heroSlideshow: [
    '/images/bg.jpg',
  ],
};

export const BOOKING_COPY = {
  policyTitle: "Important Booking Policy",
  policyDesc: "All bookings are final and non-refundable. Can't make it? You are welcome to find a replacement player to take your slot and settle payment with them directly.",
  policyLinkText: "Read our Refund Policy",
  priceDisclaimer: "* Prices may vary based on peak hours, weekends, and court selection.",
  bookingInstructions: "Select a date, then choose your preferred time slots.",
  howItWorks: {
    step03Title: "Secure Your Slot",
    step03Desc: "Complete payment via your preferred method and upload the proof of payment.",
    step04Title: "Get Confirmed",
    step04Desc: "We'll quickly verify your payment and send your booking confirmation. See you on the court!",
  },
  emptyState: {
    titleToday: "No slots available today",
    titleFuture: "No slots available for this date",
    description: "Try selecting a different date above. We're open 7 AM to 12 AM daily.",
  }
};