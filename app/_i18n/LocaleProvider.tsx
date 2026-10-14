'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { DEFAULT_LOCALE, dictionaries, type Locale } from './dictionaries';

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export const LocaleProvider = ({ locale, children }: { locale: Locale; children: ReactNode }) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
);

export const useLocale = () => useContext(LocaleContext);

export const useDictionary = () => dictionaries[useLocale()];

// Renders `**text**` segments as <span className="big">text</span>.
export const rich = (text: string): ReactNode =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <span key={i} className="big">{part}</span> : part
  );
