
import { convert } from './converter';

export default async function markdownToHtml(markdown) {
  let data = markdown.split('\n');
  const result = await convert(data, data.length);
  return result
}
