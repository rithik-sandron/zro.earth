// regex patterns

// for headers
export const h1 = /^\s*# /gim;
export const h2 = /^\s*## /gim;
export const h3 = /^\s*### /gim;
export const emptySpace = /\\s+/g;

// for quote
export const quote = /^\s*> /gim;

// list
export const Olist = /^(\s*[0-9]*((\.\d*)?)*) /gim;
export const Ulist = /^\s*- /gim;
export const UlistTask = /^\s*-\[[xX ]\] /gim;
export const UlistTaskChecked = /^\s*-\[[xX]\] /gim;
export const UlistTaskUnchecked = /^\s*-\[[ ]\] /gim;

// horizontal line
export const Hline = /---+/;

// code
export const multiLineCode = /^```/g;
export const codeHighlight = /^\* /g;
export const code = /`(.+?)`(?!\*)/gi;

// empty line
export const empty = /\S/;

// for bold, italics and strike through
export const bold = /\*\*(.+?)\*\*(?!\*)/g;
export const tag = /==(\S(.*?\S)?)==/gi;
export const tagNotify = /==\*(\S(.*?\S)?)==/gi;
export const tagHash = /==#(\S(.*?\S)?)==/gi;
export const colorTags = /=\[(.*?)\]\((.*?)\)=/gim

export const italics = /\*(.+?)\*(?!\*)/g;
export const strike = /_(.+?)_(?!\*)/g;
export const boldAndItalic = /\*\*\*(.+?)\*\*\*(?!\*)/g;
export const un = /\*\*\*\*(.+?)\*\*\*\*(?!\*)/g;
export const link = /\[\[(.*?)\]\]\(((https:|http:)\/\/.*?)\)/g;

// for sanitization
export const ltr = /</gi;
//   export const gtr = />/gi;

// Table
export const table = /^\|(.*?)\|+/gim

//accordions
export const accordion = /^\s*>[aA]/gim;
export const accord = /\+\+/gim;