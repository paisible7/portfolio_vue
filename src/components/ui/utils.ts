// Minimal classnames merger without external deps (clsx/tailwind-merge)
export type ClassValue = string | number | null | undefined | ClassDictionary | ClassArray
interface ClassDictionary { [id: string]: any }
interface ClassArray extends Array<ClassValue> {}

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = []
  const push = (val: any) => {
    if (!val) return
    if (typeof val === 'string' || typeof val === 'number') {
      classes.push(String(val))
    } else if (Array.isArray(val)) {
      val.forEach(push)
    } else if (typeof val === 'object') {
      for (const key in val) {
        if (Object.prototype.hasOwnProperty.call(val, key) && val[key]) classes.push(key)
      }
    }
  }
  inputs.forEach(push)
  // Note: this does not resolve Tailwind class conflicts like tailwind-merge
  return classes.join(' ')
}
