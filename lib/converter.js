// import infoSvg from '../static/info.svg';
// import warnSvg from '../static/warn.svg';
import { un, Hline, Olist, Ulist, UlistTask, UlistTaskChecked, UlistTaskUnchecked, bold, boldAndItalic, card, clock, code, coverImage, empty, galleryImage, h1, h2, h3, h4, h5, h6, image, italics, link, ltr, multiLineCode, profileImage, quote, quoteInfo, quoteWarning, strike, column, table, column2, column3, tag, tagHash, tagNotify, time, accordion, accord, progressBar, barChart, colorTags, codeRed, codeAmber, tab, tabOpen, tabEnd, emptySpace } from './regex';

function boldAndItalics(line, regReplaced) {
    regReplaced = line.replaceAll(un, `**$1**`);
    regReplaced = regReplaced.replaceAll(boldAndItalic, `<strong><em>$1</em></strong>`);
    regReplaced = regReplaced.replaceAll(bold, `<strong>$1</strong>`);
    regReplaced = regReplaced.replaceAll(italics, `<em>$1</em>`);
    regReplaced = regReplaced.replaceAll(strike, `<del>$1</del>`);

    regReplaced = regReplaced.replaceAll(codeAmber, `<code style='color: var(--color-amber)'>$1</code>`);
    regReplaced = regReplaced.replaceAll(codeRed, `<code style='color: var(--color-red)'>$1</code>`);
    regReplaced = regReplaced.replaceAll(code, `<code style='color: var(--color-green)'>$1</code>`);

    // regReplaced = regReplaced.replaceAll(tagNotify, `<sup>$1</sup>`);
    regReplaced = regReplaced.replaceAll(tagHash, `<span>&#35;$1</span>`);
    regReplaced = regReplaced.replaceAll(tag, `<mark>$1</mark>`);
    if (line.match(link)) {
        regReplaced = regReplaced.replace(link, `<a href='$2'>$1</a>`);
    }
    return regReplaced;
}

function sanitize(line) {
    line = line.replaceAll(ltr, '&lt;');
    return line;
}

export function convert(data, len) {
    let dataHtml = '';
    if (data) {
        let i = 0;
        while (i < len) {
            let line = data[i];
            if (empty.test(line.trim())) {
                let regReplaced = '';
                line = sanitize(line);
                switch (true) {

                    case multiLineCode.test(line):
                        dataHtml += (`<code><pre>`);
                        i++;
                        while (i < len) {
                            let lineJ = data[i];
                            if (lineJ.match(multiLineCode)) break;
                            regReplaced = lineJ;
                            if (regReplaced === '') {
                                dataHtml += `<br />`;
                            } else {
                                dataHtml += `<pre>${regReplaced}</pre>`;
                            }
                            i++;
                        }
                        dataHtml += (`</pre></code>`);
                        i++;
                        break;

                    case tab.test(line):
                        let dataHtmlTmp = '';
                        dataHtml += (`<div class='seperate-tabs'>`);
                        i++;
                        while (!data[i].match(tab)) {
                            let lineJ = data[i];
                            regReplaced = lineJ;
                            // if (regReplaced === '') {
                            //     dataHtmlTmp += `<br />`;
                            // } else {
                            //     dataHtmlTmp += regReplaced;
                            // }
                            dataHtmlTmp += regReplaced + '\n';
                            i++;
                        }
                        let tmpData = dataHtmlTmp.split('\n').filter(x => x !== "");
                        let tmpHeaders = `<div class = 'seperate-tab-heading-container'>`;
                        let tmpHeaderData = `<div class = 'seperate-tab-container'>`;
                        let tmpCounter = 0;
                        let idCounter = 1;
                        let rr = [];
                        while (tmpCounter < tmpData.length) {
                            if (tmpData[tmpCounter].match(tabOpen)) {
                                tmpHeaders += `<span class = 'seperate-tab-heading' data-id=${idCounter}>${tmpData[tmpCounter].replace(tabOpen, tmpData[tmpCounter].substring(4, tmpData[tmpCounter].length - 1))}</span>`;
                            }
                            else {
                                if (tmpData[tmpCounter].match(tabEnd)) {
                                    tmpHeaderData += `<span class = 'seperate-tab' data-id=${idCounter++}>${convert(rr, rr.length)}</span>`;
                                    rr = [];
                                }
                                else {
                                    rr.push(tmpData[tmpCounter]);
                                }
                            }

                            tmpCounter += 1;
                        }
                        tmpHeaders += `</div>`;
                        tmpHeaderData += `</div>`;

                        // dataHtmlTmp = dataHtmlTmp.replaceAll(tabOpenEnd, `<div class='tab-container'><div class='seperate-tab-heading'>$1</div>
                        // <div class='seperate-tab'>$2</div></div>`);
                        dataHtml += tmpHeaders;
                        dataHtml += tmpHeaderData;
                        dataHtml += `</div>`;
                        i++;
                        break;

                    case h1.test(line):
                        regReplaced = line.replace(h1, '');
                        dataHtml += (`<h1 id='${i}' class='table-content-h1'>${regReplaced}</h1>`);
                        i++;
                        break;


                    case h2.test(line):
                        regReplaced = line.replace(h2, '');
                        dataHtml += (`<h2 class='table-content-h2'>${regReplaced}</h2>`);
                        i++;
                        break;


                    case h3.test(line):
                        regReplaced = line.replace(h3, '');
                        dataHtml += (`<h3>${regReplaced}</h3>`);
                        i++;
                        break;

                    case h4.test(line):
                        regReplaced = line.replace(h4, '');
                        dataHtml += (`<h4>${regReplaced}</h4>`);
                        i++;
                        break;

                    case h5.test(line):
                        regReplaced = line.replace(h5, '');
                        dataHtml += (`<h5>${regReplaced}</h5>`);
                        i++;
                        break;

                    case h6.test(line):
                        regReplaced = line.replace(h6, '');
                        dataHtml += (`<h6>${regReplaced}</h6>`);
                        i++;
                        break;

                    case Hline.test(line):
                        regReplaced = line.replace(Hline, '');
                        dataHtml += (`<hr />`);
                        i++;
                        break;

                    case quote.test(line):
                        regReplaced = line.replace(quote, '');
                        dataHtml += (`<blockquote>${regReplaced}</blockquote>`);
                        i++;
                        break;


                    case progressBar.test(line):
                        regReplaced = line.replace(progressBar, '');
                        dataHtml += (`<div class='progress-bar'><span class='bar-${regReplaced.trim()}' style="width: ${regReplaced}%"></span></div>`);
                        i++;
                        break;

                    case barChart.test(line):
                        regReplaced = line.replace(barChart, '');
                        let barIndexes = regReplaced.split(' ');
                        let barChartString = `<div class='bar-chart'>`;

                        if (barIndexes) {
                            barIndexes.forEach(x => {
                                barChartString += (`<span class='chart-bar-${x}' style="height: ${x}%"></span>`);
                            });
                        }
                        barChartString += `</div>`;

                        dataHtml += barChartString;
                        i++;
                        break;

                    case accordion.test(line):
                        regReplaced = line.replace(accordion, '');
                        dataHtml += (`
                        <div class='accordion'><span class='accordionClose' data-show="no">${regReplaced}</span>`);

                        let counterAccordion = 2;
                        let stringAccordion = '';
                        i++;
                        while (counterAccordion > 0) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');

                            if (lineJ.match(accord)) {
                                if (counterAccordion === 2) {
                                    counterAccordion--;
                                    i++;
                                    continue;

                                } else {
                                    let stringAccordionArray = stringAccordion.split('\n');
                                    stringAccordionArray.pop();
                                    dataHtml += (`<div class='accordionItem'>`);
                                    dataHtml += convert(stringAccordionArray, stringAccordionArray.length);
                                    dataHtml += (`</div>`);
                                    stringAccordion = '';
                                    counterAccordion--;
                                    i++;
                                    continue;
                                }
                            }
                            stringAccordion += lineJ + '\n';
                            i++;
                        }
                        dataHtml += (`</div>`);
                        break;

                    case table.test(line):
                        dataHtml += ('<table>');
                        let isHeading = true;
                        while (i < len) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');

                            if (!lineJ.match(table)) break;

                            let cells = lineJ.substring(1, lineJ.length - 1).split('|');
                            dataHtml += ('<tr>');
                            for (let k = 0; k < cells.length; k++) {
                                cells[k] = boldAndItalics(cells[k], '');

                                if (cells[k].match(Hline)) continue;
                                dataHtml += isHeading ? (`<th>${cells[k]}</th>`) :
                                    cells[k].trim() === '' ?
                                        (`<td class='empty-row'>${cells[k]}</td>`) : (`<td>${cells[k]}</td>`);
                            }
                            dataHtml += ('</tr>');
                            isHeading = false;
                            i++;
                        }
                        dataHtml += ('</table>');
                        break;

                    case Olist.test(line):
                        dataHtml += (`<ol>`);
                        while (i < len) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');

                            if (!lineJ.match(Olist)) break;
                            const padding = (lineJ.split(/[0-9](.*)/s)[0].length) / 2;
                            regReplaced = lineJ.replace(Olist, '');
                            dataHtml += (`<li>${regReplaced}</li>`);
                            i++;
                        }
                        dataHtml += (`</ol>`);
                        break;


                    case UlistTask.test(line):
                        dataHtml += (`<dl>`);
                        while (i < len) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');

                            if (!lineJ.match(UlistTask)) break;

                            regReplaced = lineJ.replace(UlistTask, '');
                            const padding = (lineJ.split('-')[0].length) / 2;

                            if (lineJ.match(UlistTaskChecked))
                                dataHtml += (`<dd style='padding-left: ${padding}em'><p>✅</p><p>${regReplaced}</p></dd>`);
                            else if (lineJ.match(UlistTaskUnchecked))
                                dataHtml += (`<dd style='padding-left: ${padding}em'><p>⭕</p><p>${regReplaced}</p></dd>`);
                            i++;
                        }
                        dataHtml += (`</dl>`);
                        break;

                    case Ulist.test(line):
                        dataHtml += (`<ul>`);

                        while (i < len) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');
                            if (!lineJ.match(Ulist)) break;

                            const padding = (lineJ.split('-')[0].length) / 2;
                            regReplaced = lineJ.replace(Ulist, '');
                            dataHtml += (`<li>${regReplaced}</li>`);
                            i++;
                        }
                        dataHtml += (`</ul>`);
                        break;

                    default:
                        dataHtml += (`<p>${line}</p>`);
                        i++;
                        break;
                }

            } else {
                dataHtml += ("<br />");
                i++;
            }

            dataHtml = boldAndItalics(dataHtml, '');

        }


    }

    return dataHtml;

}