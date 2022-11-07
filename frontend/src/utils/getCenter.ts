const getCenter = (path: Array<any>) => {
  let sum = [0, 0];
  path.forEach((e, i) => {
    sum[0] += e[0];
    sum[1] += e[1];
  });

  sum[0] /= path.length;
  sum[1] /= path.length;
  sum[1] -= 0.01;

  return sum;
};

export default getCenter;
