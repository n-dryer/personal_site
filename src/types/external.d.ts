declare module 'body-scroll-lock' {
  export function disableBodyScroll(
    targetElement: Element,
    options?: { reserveScrollBarGap?: boolean }
  ): void;
  export function enableBodyScroll(targetElement: Element): void;
  export function clearAllBodyScrollLocks(): void;
}

declare module 'focus-trap-react' {
  import * as React from 'react';

  export interface FocusTrapOptions {
    initialFocus?: HTMLElement | (() => HTMLElement | undefined) | string;
    escapeDeactivates?: boolean | ((e: KeyboardEvent) => boolean);
    clickOutsideDeactivates?: boolean | ((e: MouseEvent) => boolean);
    onActivate?: () => void;
    onDeactivate?: () => void;
    [key: string]: any;
  }

  export interface FocusTrapProps {
    active?: boolean;
    focusTrapOptions?: FocusTrapOptions;
    children?: React.ReactNode;
  }

  const FocusTrap: React.ComponentType<FocusTrapProps>;
  export default FocusTrap;
}
