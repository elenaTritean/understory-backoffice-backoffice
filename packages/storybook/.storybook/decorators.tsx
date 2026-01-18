import type { Decorator } from "@storybook/react";
import { useEffect } from "react";

// Decorator to apply theme based on Storybook global
export const withTheme: Decorator = (StoryFn, context) => {
    const theme = context.parameters.theme || context.globals.theme || 'light';

    useEffect(() => {
        // Apply theme to document root
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return <StoryFn />;
};

// Export decorators array for use in preview.ts
export const decorators = [withTheme];
