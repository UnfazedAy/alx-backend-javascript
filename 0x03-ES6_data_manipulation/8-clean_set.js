export default function cleanSet(set, startString) {
  if (!set || typeof set[Symbol.iterator] !== 'function') return '';
  const res = [];
  if (startString === '' || typeof (startString) !== 'string') return '';
  for (const item of set) {
    if (item.startsWith(startString)) res.push(item.slice(startString.length));
  }
  return res.join('-');
}
