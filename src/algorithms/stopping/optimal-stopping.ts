/**
 *
 *
 */

const optimalStopping =
  <T>(valueFunction: (a: T) => number) =>
  (list: T[]) => {
    const length = list.length;
    if (!length) return;

    let stop = false;
    let idx = 1;
    let best = [0, valueFunction(list[0])];
    const stopAfterIdx = Math.floor(length * 0.37);
    while (!stop) {
      if (idx >= length) return list[idx - 1];

      const valueIdx = valueFunction(list[idx]);

      if (valueIdx >= best[1]) {
        best = [idx, valueIdx];
        if (idx > stopAfterIdx) stop = true;
      }
      idx++;
    }

    return list[best[0]];
  };

module.exports = optimalStopping;
