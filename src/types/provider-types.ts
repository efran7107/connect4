import React from "react";


export type Theme = 'light' | 'dark' | 'system';

export type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

export type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export type TUserProvider = {
    name: string;
    setName: (name: string) => void;
    isNameSet: boolean;
    setIsNameSet: (isNameSet: boolean) => void;
}

