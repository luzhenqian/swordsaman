/**
 * 查找子组件
 */
export function findChilds(
  target: Function,
  children: React.ReactNode,
  result: Array<React.ReactNode> = []
): Array<any> {
  if (children !== null) {
    if (Array.isArray(children)) {
      children.forEach(child => {
        findChilds(target, child, result);
      });
    } else if (typeof children === "object") {
      if ("type" in children) {
        if (children.type === target) {
          result.push(children);
        }
      }
    }
  }
  return result;
}
