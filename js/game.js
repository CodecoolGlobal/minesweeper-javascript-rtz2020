const game = {
    init: function () {
        this.drawBoard();
        this.initLeftClick();
        // TODO: do the rest of the game setup here (eg. add event listeners)
        this.initRightClick();
        this.checkwin();
        this.checklose();
    },
    freeze: function () {
        this.freezeLeftClick();
        this.freezeRightClick();
    },

    drawBoard: function () {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const rows = parseInt(urlParams.get('rows'));
        const cols = parseInt(urlParams.get('cols'));
        const mineCount = parseInt(urlParams.get('mines'));
        document.getElementById("flags-left-counter").value = mineCount;
        const minePlaces = this.getRandomMineIndexes(mineCount, cols, rows);

        let gameField = document.querySelector(".game-field");
        this.setGameFieldSize(gameField, rows, cols);
        let cellIndex = 0
        for (let row = 0; row < rows; row++) {
            const rowElement = this.addRow(gameField);
            for (let col = 0; col < cols; col++) {
                this.addCell(rowElement, row, col, minePlaces.has(cellIndex));
                cellIndex++;
            }
        }
    },
    getRandomMineIndexes: function (mineCount, cols, rows) {
        const cellCount = cols * rows;
        let mines = new Set();
        do {
            mines.add(Math.round(Math.random() * (cellCount - 1)));
        } while (mines.size < mineCount && mines.size < cellCount);
        return mines;
    },
    setGameFieldSize: function (gameField, rows, cols) {
        gameField.style.width = (gameField.dataset.cellWidth * rows) + 'px';
        gameField.style.height = (gameField.dataset.cellHeight * cols) + 'px';
    },
    addRow: function (gameField) {
        gameField.insertAdjacentHTML(
            'beforeend',
            '<div class="row"></div>'
        );
        return gameField.lastElementChild;
    },
    addCell: function (rowElement, row, col, isMine) {
        rowElement.insertAdjacentHTML(
            'beforeend',
            `<div class="field${isMine ? ' mine' : ''}"
                        data-row="${row}"
                        data-col="${col}"></div>`);
    },

    freezeLeftClick() {
        let fields = document.querySelectorAll('.game-field .row .field');
        for (let field of fields) {
            field.addEventListener('click', function (event) {
                event.preventDefault();
            });
        };
    },

    freezeRightClick() {
        let fields = document.querySelectorAll('.game-field .row .field');
        for (let field of fields) {
            field.addEventListener('contextmenu', function (event) {
                event.preventDefault();
            });
        };
    },
    // reference solution for "Create mine flagging feature" user story
    initRightClick() {
        // we collect all fields of the game.
        // (the same selector is used as in the style.css file for finding the fields)
        let fields = document.querySelectorAll('.game-field .row .field');

        // for all fields...
        for (let field of fields) {
            // we add the same event listener for the right click (so called contextmenu) event
            field.addEventListener('contextmenu', function (event) {
                // so if you right click on any field...

                // context menu remains hidden
                event.preventDefault();

                // and "flagged" class toggles on the clicked element
                // (styles of "flagged" class are defined in style.css)
                if (event.currentTarget.classList == 'open') {
                    event.currentTarget.classList = 'open'
                } else if (event.currentTarget.classList == 'flagged'){
                    event.currentTarget.classList = 'field';
                    document.getElementById("flags-left-counter").value++
                } else if (event.currentTarget.classList == 'pit'){
                    event.currentTarget.classList = 'pit';
                } else if (event.currentTarget.classList == 'field mine'){
                    event.currentTarget.classList = 'mineflag';
                    document.getElementById("flags-left-counter").value -= 1
                } else if (event.currentTarget.classList == 'mineflag'){
                    event.currentTarget.classList = 'field mine';
                    document.getElementById("flags-left-counter").value++
                } else {
                    event.currentTarget.classList = 'flagged'
                    document.getElementById("flags-left-counter").value -= 1
                }
            });
        }
    },

    initLeftClick() {
        let fields = document.querySelectorAll('.game-field .row .field');
        for (let field of fields) {
            field.addEventListener('click', function (event) {
                let count = 0
                let nextrow = (Number(field.dataset.row)-1)
                let nextcol = (Number(field.dataset.col)-1)
                let nextrow2 = (Number(field.dataset.row)-1)
                let nextcol2 = (Number(field.dataset.col))
                let nextrow3 = (Number(field.dataset.row)-1)
                let nextcol3 = (Number(field.dataset.col)+1)
                let nextrow4 = (Number(field.dataset.row))
                let nextcol4 = (Number(field.dataset.col)-1)
                let nextrow5 = (Number(field.dataset.row))
                let nextcol5 = (Number(field.dataset.col)+1)
                let nextrow6 = (Number(field.dataset.row)+1)
                let nextcol6 = (Number(field.dataset.col)-1)
                let nextrow7 = (Number(field.dataset.row)+1)
                let nextcol7 = (Number(field.dataset.col))
                let nextrow8 = (Number(field.dataset.row)+1)
                let nextcol8 = (Number(field.dataset.col)+1)
                for (let i of fields) {
                    if (i.dataset.row == nextrow) {
                        if (i.dataset.col == nextcol) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                    if (i.dataset.row == nextrow2) {
                        if (i.dataset.col == nextcol2) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                    if (i.dataset.row == nextrow3) {
                        if (i.dataset.col == nextcol3) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                    if (i.dataset.row == nextrow4) {
                        if (i.dataset.col == nextcol4) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                    if (i.dataset.row == nextrow5) {
                        if (i.dataset.col == nextcol5) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                    if (i.dataset.row == nextrow6) {
                        if (i.dataset.col == nextcol6) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                    if (i.dataset.row == nextrow7) {
                        if (i.dataset.col == nextcol7) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                    if (i.dataset.row == nextrow8) {
                        if (i.dataset.col == nextcol8) {
                            if (i.classList == 'field mine') {
                                count += 1
                            };
                            if (i.classList == 'pit') {
                                count += 1
                            };
                            if (i.classList == 'mineflag') {
                                count += 1
                            };
                        };
                    };
                };
                if (event.currentTarget.classList == 'flagged') {
                    event.currentTarget.classList = 'flagged'
                } else if (event.currentTarget.classList == 'field mine') {
                    event.currentTarget.classList = 'pit';
                } else if (event.currentTarget.classList == 'pit') {
                    event.currentTarget.classList = 'pit';
                } else {
                    event.currentTarget.classList = 'open';
                    if (count != 0) {
                    event.currentTarget.textContent = count;
                    };
                };
            });
        }
    },
    checkwin() {
        let fields = document.querySelectorAll('.game-field .row .field');
        for (let field of fields) {
            field.addEventListener('click', function (event) {
                let counter = 0;
                let fields = document.querySelectorAll('.game-field .row .field');
                for (field of fields) {
                    if (field.classList == 'field') {
                        counter++;
                    } else if (field.classList == 'flagged') {
                        counter++;
                    }
                };
                if (counter == 0) {
                    alert("You won");
                    document.addEventListener("click",handler,true);

                    function handler(e){
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    document.addEventListener("contextmenu",handler,true);

                    function handler(e){
                        e.stopPropagation();
                        e.preventDefault();
                    }
                };
            });
        };
    },
    checklose() {
        let fields = document.querySelectorAll('.game-field .row .field');
        for (let field of fields) {
            field.addEventListener('click', function (lost) {
                if (lost.currentTarget.classList == 'pit') {
                    alert('Game Over!');
                    for (let i of fields) {
                        if (i.classList == 'field mine') {
                            i.classList = 'pit'
                        };
                        if (i.classList == 'mineflag') {
                            i.classList = 'pit'
                        };
                    };
                    document.addEventListener("click",handler,true);

                    function handler(e){
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    document.addEventListener("contextmenu",handler,true);

                    function handler(e){
                        e.stopPropagation();
                        e.preventDefault();
                    };
                    }
            });
        };
    },
};

game.init();
