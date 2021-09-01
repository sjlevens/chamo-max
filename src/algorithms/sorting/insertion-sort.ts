const insertionSort =
  <T>(isSorted: (a: T, b: T) => boolean) =>
  (list: T[]) => {
    let newList: T[] = [];

    list.forEach((item) => {
      if (!newList.length) {
        newList.push(item);
      } else {
        let inserted = false;
        let idx = 0;
        while (!inserted) {
          if (isSorted(newList[idx], item)) {
            idx++;
          } else {
            newList = [...newList.slice(0, idx), item, ...newList.slice(idx)];
            inserted = true;
          }
        }
      }
    });

    return newList;
  };

module.exports = insertionSort;
