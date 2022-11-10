import type { ChartData, ChartArea } from 'chart.js';

export default function createGradient(
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colorStart: string,
  colorMid: string,
  colorEnd: string
) {
  console.log(area.bottom, area.top);
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}
