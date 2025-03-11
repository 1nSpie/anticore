'use client';
import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <SiteContainer>{children}</SiteContainer>
    </NextThemesProvider>
  );
}

function SiteContainer({ children }: Props) {
  return <div className="margin-10">{children}</div>;
}
