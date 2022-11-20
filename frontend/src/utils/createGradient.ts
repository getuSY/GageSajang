import type { ChartArea } from 'chart.js';

export default function createGradient(
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: Array<[number, string]>,
  isVert: boolean = true
) {
  const gradient = isVert
    ? ctx.createLinearGradient(0, area.bottom, 0, area.top)
    : ctx.createLinearGradient(area.left, 0, area.right, 0);

  colors.forEach((color, i) => {
    gradient.addColorStop(...color);
  });

  return gradient;
}
