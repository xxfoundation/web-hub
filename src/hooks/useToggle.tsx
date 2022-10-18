import React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

import useIsMountedRef from './useIsMountedRef';

type UseToggle = [
  boolean,
  {
    icon: React.ReactElement;
    set: (active: boolean) => void;
    toggle: () => void;
    toggleOn: () => void;
    toggleOff: () => void;
  }
];

const useToggle = (defaultValue = false, onToggle?: (isActive: boolean) => void): UseToggle => {
  const mountedRef = useIsMountedRef();
  const [isActive, setActive] = useState(defaultValue);

  const toggle = useCallback((): void => {
    if (mountedRef.current) {
      setActive((active) => !active);
    }
  }, [mountedRef]);

  const set = useCallback(
    (active: boolean): void => {
      if (mountedRef.current) {
        setActive(active);
      }
    },
    [mountedRef]
  );

  const toggleOn = useCallback(() => set(true), [set]);

  const toggleOff = useCallback(() => set(false), [set]);

  useEffect(() => onToggle && onToggle(isActive), [isActive, onToggle]);

  const icon = useMemo(() => (isActive ? <KeyboardArrowUp /> : <KeyboardArrowDown />), [isActive]);

  return useMemo(
    () => [
      isActive,
      {
        icon,
        set,
        toggle,
        toggleOn,
        toggleOff
      }
    ],
    [isActive, icon, set, toggle, toggleOn, toggleOff]
  );
}

export default useToggle;
