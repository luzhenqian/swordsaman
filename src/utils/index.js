/**
 * 查找子组件
 */
export function findChilds(target, children, result = []) {
    if (children !== null) {
        if (Array.isArray(children)) {
            children.forEach(child => {
                findChilds(target, child, result);
            });
        }
        else if (typeof children === "object") {
            if ("type" in children) {
                if (children.type === target) {
                    result.push(children);
                }
            }
        }
    }
    return result;
}
