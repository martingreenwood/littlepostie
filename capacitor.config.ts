import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.littlepostie.app",
    appName: "littlepostie",
    webDir: "dist",
    android: {
        allowMixedContent: true,
        webContentsDebuggingEnabled: true,
    },
};

export default config;
