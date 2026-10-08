// Turns numeric citations such as [3] or [16, 17] in essay text into links
// to the matching entry in the reference list (#ref-3).
const CITE = /\[(\d+(?:,\s*\d+)*)\]/g;

function linkify(value) {
  const nodes = [];
  let last = 0;
  for (const match of value.matchAll(CITE)) {
    if (match.index > last) nodes.push({ type: 'text', value: value.slice(last, match.index) });
    const links = match[1]
      .split(',')
      .map((n) => n.trim())
      .map((n) => `<a href="#ref-${n}">${n}</a>`)
      .join(', ');
    nodes.push({ type: 'html', value: `<span class="cite">[${links}]</span>` });
    last = match.index + match[0].length;
  }
  if (last === 0) return null;
  if (last < value.length) nodes.push({ type: 'text', value: value.slice(last) });
  return nodes;
}

function walk(node) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === 'text') {
      const replacement = linkify(child.value);
      if (replacement) {
        node.children.splice(i, 1, ...replacement);
        i += replacement.length - 1;
      }
    } else if (child.type !== 'code' && child.type !== 'inlineCode') {
      walk(child);
    }
  }
}

export default function remarkCitations() {
  return (tree) => walk(tree);
}
