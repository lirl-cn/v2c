export { customSort } from './custom-sort';
/**
 * 检查目标值是否为空。
 * @param target 要检查的目标值，可以是任意类型。
 * @param emptyStringIsEmpty 当设置为true时，空字符串也会被视为为空。默认值为true。
 * @returns 返回一个布尔值，如果目标值为空，则为true；否则为false。
 */
export declare const isEmpty: (target: any, emptyStringIsEmpty?: boolean) => boolean;
