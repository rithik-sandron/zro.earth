// import infoSvg from '../static/info.svg';
// import warnSvg from '../static/warn.svg';
import { un, Hline, Olist, Ulist, UlistTask, UlistTaskChecked, UlistTaskUnchecked, bold, boldAndItalic, card, clock, code, coverImage, empty, galleryImage, h1, h2, h3, h4, h5, h6, image, italics, link, ltr, multiLineCode, profileImage, quote, quoteInfo, quoteWarning, strike, column, table, column2, column3, tag, tagHash, tagNotify, time, accordion, accord, progressBar, barChart, colorTags, codeRed, codeAmber, tab, tabOpen, tabEnd, emptySpace } from './regex';

function boldAndItalics(line, regReplaced) {
    regReplaced = line.replaceAll(un, `**$1**`);
    regReplaced = regReplaced.replaceAll(boldAndItalic, `<strong><em>$1</em></strong>`);
    regReplaced = regReplaced.replaceAll(bold, `<strong>$1</strong>`);
    regReplaced = regReplaced.replaceAll(italics, `<em>$1</em>`);
    regReplaced = regReplaced.replaceAll(strike, `<del>$1</del>`);
    regReplaced = regReplaced.replaceAll(codeAmber, `<code class='amber'>$1</code>`);
    regReplaced = regReplaced.replaceAll(codeRed, `<code class='red'>$1</code>`);
    regReplaced = regReplaced.replaceAll(code, `<code class='green'>$1</code>`);
    regReplaced = regReplaced.replaceAll(colorTags, `<span class='tag-colors' style="background-color: $1">$2</span>`);
    regReplaced = regReplaced.replaceAll(tagNotify, `<span class='tag-notify'>$1</span>`);
    regReplaced = regReplaced.replaceAll(tagHash, `<span class='tag-hash'>$1</span>`);
    regReplaced = regReplaced.replaceAll(tag, `<span class='tag'>$1</span>`);
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
                        dataHtml += (`<code class='multi-line-code'>`);
                        i++;
                        while (i < len) {
                            let lineJ = data[i];
                            if (lineJ.match(multiLineCode)) break;
                            regReplaced = lineJ;
                            if (regReplaced === '') {
                                dataHtml += `<br />`;
                            } else {
                                dataHtml += `<span class='line-code'>${regReplaced}</span>`;
                            }
                            i++;
                        }
                        dataHtml += (`</code>`);
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

                    case time.test(line):
                        const date = new Date();
                        regReplaced = line.replaceAll(time, `<span class='time'>${date.toDateString() + ' ' + date.toLocaleTimeString()}</span>`);
                        dataHtml += (regReplaced);
                        i++;
                        break;

                    case clock.test(line):
                        const date2 = new Date();
                        regReplaced = line.replaceAll(clock, `<div class='clock'>${date2.toDateString()} <div class='clock-time'>${date2.toLocaleTimeString()}</div></div>`);
                        dataHtml += (regReplaced);
                        i++;
                        break;


                    case h1.test(line):
                        regReplaced = line.replace(h1, '');
                        dataHtml += (`<h1>${regReplaced}</h1>`);
                        i++;
                        break;


                    case h2.test(line):
                        regReplaced = line.replace(h2, '');
                        dataHtml += (`<h2>${regReplaced}</h2>`);
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

                    case quoteWarning.test(line):
                        regReplaced = line.replace(quoteWarning, '');
                        // dataHtml += (`<blockquote class='warn-block'><img class='warn' alt='$1' src= '${warnSvg}' />${regReplaced}</blockquote>`);
                        i++;
                        break;

                    case quoteInfo.test(line):
                        regReplaced = line.replace(quoteInfo, '');
                        // dataHtml += (`<blockquote class='info-block'><img class='info' alt='$1'><svg xmlns="http://www.w3.org/2000/svg" fill='rgb(15, 106, 203)' height="24" width="24"><path d="M10.95 17.15h2.15V11h-2.15ZM12 8.9q.45 0 .75-.313.3-.312.3-.762 0-.425-.3-.738-.3-.312-.75-.312t-.75.3q-.3.3-.3.75t.3.762q.3.313.75.313Zm0 13.4q-2.125 0-4.012-.812-1.888-.813-3.275-2.2-1.388-1.388-2.2-3.263Q1.7 14.15 1.7 12q0-2.15.813-4.038.812-1.887 2.2-3.275Q6.1 3.3 7.988 2.5 9.875 1.7 12 1.7q2.15 0 4.038.8 1.887.8 3.274 2.187Q20.7 6.075 21.5 7.962q.8 1.888.8 4.038 0 2.15-.8 4.025-.8 1.875-2.188 3.263-1.387 1.387-3.274 2.2Q14.15 22.3 12 22.3Zm0-2.15q3.425 0 5.788-2.363Q20.15 15.425 20.15 12t-2.362-5.788Q15.425 3.85 12 3.85q-3.425 0-5.787 2.362Q3.85 8.575 3.85 12q0 3.425 2.363 5.787Q8.575 20.15 12 20.15ZM12 12Z"/></svg></img>${regReplaced}</blockquote>`);
                        i++;
                        break;

                    case quote.test(line):
                        regReplaced = line.replace(quote, '');
                        dataHtml += (`<blockquote class='block'>${regReplaced}</blockquote>`);
                        i++;
                        break;

                    case card.test(line):
                        regReplaced = line.replace(card, '');
                        dataHtml += (`<div class='card'>${regReplaced}</div>`);
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
                        <div class='ken-accordion'><span class='accordion-close'  data-show="no">${regReplaced}</span>`);

                        let counterAccordion = 2;
                        let stringAccordion = '';
                        i++;
                        while (counterAccordion > 0) {
                            let lineJ = data[i];
                            // lineJ = boldAndItalics(lineJ, '');

                            if (lineJ.match(accord)) {
                                if (counterAccordion === 2) {
                                    counterAccordion--;
                                    i++;
                                    continue;

                                } else {
                                    let stringAccordionArray = stringAccordion.split('\n');
                                    stringAccordionArray.pop();
                                    dataHtml += (`<div class='ken-accordion-item'>`);
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


                    case image.test(line):
                        const loc = line.match(/!\[.*?\]\((.*?)\)/)[1].toString();
                        // regReplaced = line.replace(image, `<img loading="lazy" class='image' alt='$1' src='${require(`../notes/${loc}`)}' />`);
                        dataHtml += (regReplaced);
                        i++;
                        break;

                    case profileImage.test(line):
                        const dp = line.match(/!p\[.*?\]\((.*?)\)/)[1].toString();
                        // regReplaced = line.replace(profileImage, `<p><img loading="lazy" class='profile-image' alt='$1' src='${require(`../notes/${dp}`)}' />`);
                        regReplaced += '</p>';
                        dataHtml += (regReplaced);
                        i++;
                        break;

                    case coverImage.test(line):
                        const cr = line.match(/!c\[.*?\]\((.*?)\)/)[1].toString();
                        // regReplaced = line.replace(coverImage, `<div><img loading="lazy" class='cover-image' alt='$1' src='${require(`..//${cr}`)}' /><span class='image-desc'>$1</span></div>`);
                        // regReplaced = line.replace(coverImage, `<img loading="lazy" class='cover-image' alt='$1' src='${require(`../notes/${cr}`)}' />`);
                        dataHtml += (regReplaced);
                        i++;
                        break;

                    case galleryImage.test(line):
                        dataHtml += (`<div class='gallery'>`);
                        while (i < len) {
                            let lineJ = data[i];
                            if (!lineJ.match(galleryImage)) break;
                            let gal = lineJ.match(/!g\[.*?\]\((.*?)\)/)[1].toString();

                            // regReplaced = lineJ.replace(galleryImage, `<img loading="lazy" class='gallery-image' alt='$1' src='${require(`../notes/${gal}`)}' />`);
                            dataHtml += regReplaced;
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
                            const padding = (lineJ.split(/[0-9](.*)/s)[0].length)/2;
                            regReplaced = lineJ.replace(Olist, '');
                            dataHtml += (`<li><span class='o-list' style='padding-left: ${padding}em'></span><span>${regReplaced}<span></li>`);
                            i++;
                        }
                        dataHtml += (`</ol>`);
                        break;


                    case UlistTask.test(line):
                        dataHtml += (`<ul class='checkbox-list'>`);
                        while (i < len) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');

                            if (!lineJ.match(UlistTask)) break;

                            regReplaced = lineJ.replace(UlistTask, '');
                            const padding = (lineJ.split('-')[0].length)/2;

                            if (lineJ.match(UlistTaskChecked))
                                dataHtml += (`<li class='checkbox' style='padding-left: ${padding}em'><span class="checked"></span><span>${regReplaced}</span></li>`);
                            else if (lineJ.match(UlistTaskUnchecked))
                                dataHtml += (`<li class='checkbox' style='padding-left: ${padding}em'><span class="unchecked"></span><span>${regReplaced}</span></li>`);
                            i++;
                        }
                        dataHtml += (`</ul>`);
                        break;

                    case Ulist.test(line):
                        dataHtml += (`<ul>`);

                        while (i < len) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');
                            if (!lineJ.match(Ulist)) break;
                            
                            const padding = (lineJ.split('-')[0].length)/2;
                            regReplaced = lineJ.replace(Ulist, '');
                            dataHtml += (`<li class='u-list' style='padding-left: ${padding}em'><span>${regReplaced}</span></li>`);
                            i++;
                        }
                        dataHtml += (`</ul>`);
                        break;

                    case column2.test(line):
                        ++i;
                        let iterations2 = Number(line.replace(column, ''));
                        dataHtml += (`<div class='tabs-${iterations2}'>`);
                        let counter2 = iterations2 * 2;
                        regReplaced = line.replace(column, '');

                        let stringTab2 = '';
                        while (counter2 > 0) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');

                            if (lineJ.match(column)) {
                                if (counter2 % 2 === 0) {
                                    counter2--;
                                    i++;

                                    continue;
                                } else {
                                    let stringTabArray = stringTab2.split('\n');
                                    stringTabArray.pop();
                                    dataHtml += (`<div class='tabs-2-item'>`);
                                    dataHtml += convert(stringTabArray, stringTabArray.length);
                                    dataHtml += (`</div>`);
                                    stringTab2 = '';
                                    counter2--;
                                    i++;
                                    continue;
                                }
                            }
                            stringTab2 += lineJ + '\n';
                            i++;

                        }
                        dataHtml += (`</div>`);
                        break;

                    case column3.test(line):
                        ++i;
                        const iterations3 = Number(line.replace(column, ''));
                        dataHtml += (`<div class='tabs-${iterations3}'>`);
                        let counter3 = iterations3 * 2;
                        regReplaced = line.replace(column, '');

                        let stringTab3 = '';
                        while (counter3 > 0) {
                            let lineJ = data[i];
                            lineJ = boldAndItalics(lineJ, '');

                            if (lineJ.match(column)) {
                                if (counter3 % 2 === 0) {
                                    counter3--;
                                    i++;

                                    continue;
                                } else {
                                    let stringTabArray = stringTab3.split('\n');
                                    stringTabArray.pop();
                                    dataHtml += (`<div class='tabs-3-item'>`);
                                    dataHtml += convert(stringTabArray, stringTabArray.length);
                                    dataHtml += (`</div>`);
                                    stringTab3 = '';
                                    counter3--;
                                    i++;
                                    continue;
                                }
                            }
                            stringTab3 += lineJ + '\n';
                            i++;

                        }
                        dataHtml += (`</div>`);
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