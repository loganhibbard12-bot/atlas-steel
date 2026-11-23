import { Notice, Plugin } from "obsidian";

export default class AtlasSteelPlugin extends Plugin {
  onload(): void {
    this.addCommand({
      id: "show-status",
      name: "Show Atlas Steel status",
      callback: () => {
        new Notice("Atlas Steel is installed. Tracker features are in development.");
      },
    });
  }
}
