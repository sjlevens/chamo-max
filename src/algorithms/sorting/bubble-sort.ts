const bubbleSort =
  <T>(isSorted: (a: T, b: T) => boolean) =>
  (list: T[]) => {
    let sorted = false;
    let listCopy = list;

    while (!sorted) {
      let change = false;
      listCopy.forEach((item, idx) => {
        if (idx < listCopy.length - 1) {
          if (!isSorted(item, listCopy[idx + 1])) {
            listCopy[idx] = listCopy[idx + 1];
            listCopy[idx + 1] = item;
            change = true;
          }
        }
      });

      if (!change) sorted = true;
    }

    return listCopy;
  };

module.exports = bubbleSort;
