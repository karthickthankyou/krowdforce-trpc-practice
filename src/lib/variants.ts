import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export const panelVariants = cva(
  'absolute space-y-2 p-2', // Base styles
  {
    variants: {
      position: {
        'left-top': 'top-0 left-0 flex flex-col items-start',
        'left-center':
          'top-1/2 -translate-y-1/2 left-0 flex flex-col items-start',
        'left-bottom': 'bottom-0 left-0 flex flex-col items-start',
        'center-bottom':
          'bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center',
        'right-bottom': 'bottom-0 right-0 flex flex-col items-end text-right',
        'right-center':
          'top-1/2 -translate-y-1/2 right-0 flex flex-col items-end text-right',
        'right-top': 'top-0 right-0 flex flex-col items-end text-right',
        'center-top':
          'top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center',
        'center-center':
          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center',
      },
    },
    defaultVariants: {
      position: 'left-top', // Default position
    },
  },
)

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
