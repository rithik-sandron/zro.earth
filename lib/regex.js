// regex patterns

// for headers
export const h1 = /^\s*# /gim;
export const h2 = /^\s*## /gim;
export const h3 = /^\s*### /gim;
export const h4 = /^\s*#### /gim;
export const h5 = /^\s*##### /gim;
export const h6 = /^\s*###### /gim;
export const time = /^\s*==date/gim;
export const clock = /^\s*==clock/gim;
export const emptySpace = /\\s+/g;


// for quote
export const quote = /^\s*> /gim;
export const quoteInfo = /^\s*>[iI] /gim;
export const quoteWarning = /^\s*>[wW] /gim;
export const card = /^\s*>[cC]/gim;


export const barChart = /^\s*>bc | ^\s*>BC | ^\s*>Bc | ^\s*bC /gim;
export const progressBar = /^\s*>%/gim;

// list
export const Olist = /^(\s*[0-9]*((\.\d*)?)*) /gim;
export const Ulist = /^\s*- /gim;
export const UlistTask = /^\s*-\[[xX ]\] /gim;
export const UlistTaskChecked = /^\s*-\[[xX]\] /gim;
export const UlistTaskUnchecked = /^\s*-\[[ ]\] /gim;

// horizontal line
export const Hline = /---+/;

// code
export const multiLineCode = /^```/gm;
export const code = /`(.+?)`(?!\*)/gi;
export const codeRed = /~(.+?)~(?!\*)/gi;
export const codeAmber = /``(.+?)``(?!\*)/gi;

// empty line
export const empty = /\S/;

// for bold, italics and strike through
export const bold = /\*\*(.+?)\*\*(?!\*)/g;
export const tag = /==(\S(.*?\S)?)==/gi;
export const tagNotify = /==(\S(.*?\S)?)\*==/gi;
export const tagHash = /==#(\S(.*?\S)?)==/gi;
export const colorTags = /=\[(.*?)\]\((.*?)\)=/gim

export const italics = /\*(.+?)\*(?!\*)/g;
export const strike = /_(.+?)_(?!\*)/g;
export const boldAndItalic = /\*\*\*(.+?)\*\*\*(?!\*)/g;
export const un = /\*\*\*\*(.+?)\*\*\*\*(?!\*)/g;
export const link = /\[(.*?)\]\(((https:|http:)\/\/.*?)\)/gim

// for sanitization
export const ltr = /</gi;
//   export const gtr = />/gi;

// Image
export const image = /!\[(.*?)\]\((.*?)\)/gim;
export const profileImage = /!p\[(.*?)\]\((.*?)\)/gim;
export const coverImage = /!c\[(.*?)\]\((.*?)\)/gim;
export const galleryImage = /!g\[(.*?)\]\((.*?)\)/gim;

// Table
export const table = /^\|(.*?)\|+/gim

//tabs
export const tab = /:::/gim;
export const tabOpen = /:{ \[.*?\]/gim;
export const tabEnd = /}:/gim;

export const column = /::/gim;
export const column2 = /::2/gim;
export const column3 = /::3/gim;

//accordions
export const accordion = /^\s*>[aA]/gim;
export const accord = /\+\+/gim;