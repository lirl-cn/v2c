/**
 * 拉平数组
 * @param {any[]} arr 数据源
 * @param {string} children 包含子集的字段名称
 * @returns {any[]}
 */
 export const flatArray:<T = any>(arr:T[], children?: string) => T[] = (
  arr = [],
  children = 'children',
) => {
  return arr.reduce((pre:any[], cur:any) => {
    if (cur[children]) {
      pre.push(...flatArray(cur[children]));
      pre.push({ ...cur, [children]: undefined });
    } else {
      pre.push(cur);
    }
    return pre;
  }, []);
};

