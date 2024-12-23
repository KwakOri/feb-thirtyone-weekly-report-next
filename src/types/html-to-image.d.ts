declare module "html-to-image" {
  export function toPng(node: HTMLElement): Promise<string>;
}
