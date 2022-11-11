import type { ChartArea } from 'chart.js';

export default function createGradient(
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: Array<[number, string]>
) {
  console.log(area.bottom, area.top);
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  colors.forEach((color, i) => {
    gradient.addColorStop(...color);
  });

  return gradient;
}
