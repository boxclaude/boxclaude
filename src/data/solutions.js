import ss00a from '../../screenshots/00-set-the-folder-as-claude-box.png'
import ss00b from '../../screenshots/00-the-specify-box-save-to-CLAUDE.local.md.png'
import ss01 from '../../screenshots/01-add-a-folder-to-box.png'
import ss02 from '../../screenshots/02-add-an-individual-file-to-box.png'
import ss03 from '../../screenshots/03-now-claude-code-become-more-orianted.png'
import ss10 from '../../screenshots/10-view-set-box-in-dependency-graph.png'
import ss11 from '../../screenshots/11-add-a-file-to-box-in-dependency-graph.png'
import ss12 from '../../screenshots/12-detect-cyclic-dependencies.png'

export const solutions = [
	{
		num: '01 / 08',
		screenshot: ss00a,
		alt: 'Set folder as Claude Box',
		title: 'Right-click to set your Box',
		pain: 'Claude roams your entire project by default, touching files far outside your intended scope.',
		fix: 'Right-click any folder in the VSCode Explorer → Set as Claude Box. Claude is now scoped to exactly here.',
		size: 111, cx: 12, cy: 91, px: 18, py: 82
	},
	{
		num: '02 / 08',
		screenshot: ss00b,
		alt: 'Box saved to CLAUDE.local.md',
		title: 'Your scope, persisted and private',
		pain: 'Scope restrictions are verbal — you re-explain them every session and Claude still wanders.',
		fix: 'BoxClaude saves your scope to CLAUDE.local.md — gitignored, private to your machine, remembered between sessions.',
		size: 66, cx: 17, cy: 6, px: 25, py: 2
	},
	{
		num: '03 / 08',
		screenshot: ss01,
		alt: 'Add folder to Box',
		title: 'Expand your Box on demand',
		pain: 'One folder is too narrow — a feature spans multiple modules and Claude keeps hitting context walls.',
		fix: 'Add more folders to your Box as needed. Your scope grows with the task, not the whole project.',
		size: 101, cx: 12, cy: 75, px: 23, py: 76
	},
	{
		num: '04 / 08',
		screenshot: ss02,
		alt: 'Add individual file to Box',
		title: 'Surgical precision — one file at a time',
		pain: 'Even folder-level scope is too broad — you want Claude to touch exactly one file, nothing else.',
		fix: 'Add individual files to your Box. Claude sees only what you have explicitly allowed.',
		size: 100, cx: 14, cy: 88, px: 33, py: 88
	},
	{
		num: '05 / 08',
		screenshot: ss03,
		alt: 'Claude becomes more oriented',
		title: 'Claude becomes oriented to your work',
		pain: 'Claude gets confused by the breadth of a large codebase and starts modifying unrelated areas.',
		fix: 'With your Box defined, Claude\'s context is sharp and focused. It knows exactly where it is and where it can work.',
		size: 150, cx: 81, cy: 89, px: 77, py: 77,
		transform: 'translate(0, 0)'
	},
	{
		num: '06 / 08',
		screenshot: ss10,
		alt: 'Set Box in dependency graph',
		title: 'See your dependencies, set your Box',
		pain: 'Picking files blindly — you don\'t know what Claude needs to see without giving it everything.',
		fix: 'Open the interactive dependency graph to visualize your codebase, then set your Box from there with full context.',
		size: 105, cx: 15, cy: 94, px: 30, py: 94
	},
	{
		num: '07 / 08',
		screenshot: ss11,
		alt: 'Add file from dependency graph',
		title: 'Click to scope from the graph',
		pain: 'A file\'s role only makes sense in relation to its connections — you can\'t judge it in isolation.',
		fix: 'Click any node in the dependency graph to add it to your Box. Pan, zoom, and explore before committing.',
		size: 104, cx: 38, cy: 44, px: 47, py: 44
	},
	{
		num: '08 / 08',
		screenshot: ss12,
		alt: 'Detect cyclic dependencies',
		title: 'Catch cycles before Claude does',
		pain: 'Claude can thrash in circular logic when it encounters dependency cycles — endless changes, no progress.',
		fix: 'BoxClaude detects and highlights cyclic dependencies in red. Fix your architecture first — then let Claude in.',
		size: 150, cx: 55, cy: 36, px: 66, py: 36
	},
]
